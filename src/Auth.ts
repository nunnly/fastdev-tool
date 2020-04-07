export interface AuthRole{
  [roleName:string]: boolean;
}
export interface AuthOptions{
  roles?: AuthRole;
  prefix?: string;
}

export class Auth {
  constructor(options:AuthOptions = {}) {
    const {roles = {}, prefix = '.'} = options;
    this.addRoles(roles);
    this.prefix = prefix;
  }

  prefix:string = '.';

  addRoles(roles:AuthRole){
    Object.entries(roles).forEach(([roleName, value]) => {
      this.roles.set(roleName, value)
    })
  }

  contains(roleName: string | string[]):boolean{
    const roles = this.getRoles(roleName);
    const allowList:string[] = [];
    const keys = this.roles.entries()
    for(let [k, v] of keys){
      if(v){
        allowList.push(k);
      }
    }
    return !!allowList.find(v=> {
      return roles.find(val => v === val || val.startsWith(`${v}${this.prefix}`))
    })
  }

  removeRoles(roleName:string[] | string){
    const roles = this.getRoles(roleName);
    roles.forEach(v=> {
      this.roles.delete(v);
    })
  }

  roles:Map<string, boolean> = new Map();

  some(roleName: string|string[]){
    const roles = this.getRoles(roleName);
    return roles.some(v=> this.roles.has(v));
  }
  every(roleName: string|string[]){
    const roles = this.getRoles(roleName);
    return roles.every((v)=> this.roles.has(v));
  }

  getRoles(roleName: string | string[]) {
    let roles: string[];
    if (typeof roleName === 'string') {
      roles = [roleName];
    } else {
      roles = roleName;
    }
    return roles;
  }
}

export default Auth;
