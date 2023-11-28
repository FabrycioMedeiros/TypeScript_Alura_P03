export function domInjector(seletor: string) {
    return function(target: any, propertyKey: string){
        console.log(`Modificando prototype ${target.constructor.name} 
        e adicionando getter para a propriedade ${propertyKey}`);
        let elemento: HTMLElement | null = null;
        // let elemento: HTMLElement; SITAUAÇÃO Indefined(pode usar as duas para está situação)
        const getter = function() {
            if (!elemento) {
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log(`buscando elemento do DOM cpm o seletor 
                ${seletor} para injetar em ${propertyKey}`);
            }  
            return elemento;
        }

        Object.defineProperty(
            target, 
            propertyKey, 
            { get: getter }
            
        );
    }
}