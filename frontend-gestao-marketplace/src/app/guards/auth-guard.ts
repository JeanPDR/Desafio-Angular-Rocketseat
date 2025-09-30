import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { UserService } from "../services/user";
import { UserAuthService } from "../services/user-auth";
import { firstValueFrom } from "rxjs";

export const authGuard: CanActivateFn = async (route, state) => {

     const _userService = inject(UserService);
     const _userAuthService = inject(UserAuthService);
     const _router = inject(Router);

     //Não possui token no localstorage

     const HAS_TOKEN = _userAuthService.getUserToken();
     if (!HAS_TOKEN){
      return _router.navigate(['/login']);
     }

     try {
          //Tenta validar o token no backend
       await firstValueFrom(_userService.validateUser());
         // se o usuário esta validado e a rota que ele está tentando a acessar é a de login,
         //ele é redirecionado para a página de produtos.

         //Desafio Implementar um novo guard para o Login, verificando se ele tem o token valido se tiver encaminhar para /products
     //   if(state.url === '/login'){
     //      return _router.navigate(['/products']);
     //   }
       
          //Se o token é valido e a rota não é a de login. permite o acesso para a rota desejada.
       return true;

     } catch (error) {
          //Se a requisição de validação falhar (token inválido), redireciona para o login
          window.alert("Token Inválido");
        return _router.navigate(['/login']);
     }
}