// TODO: Checking the password for suitability.


export class PasswordValidator {
    private rules: string[];
    
    constructor() {
        this.rules = [];
    }
    
    minlet(length: number): PasswordValidator {
        this.rules.push(`.minlet(${length})`);
        return this;
      }
    
      maxlet(length: number): PasswordValidator {
        this.rules.push(`.maxlet(${length})`);
        return this;
      }
}

