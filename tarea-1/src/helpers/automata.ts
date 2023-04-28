interface Automata {
    estadoActual: number;
    cambiarEstado(input: string): boolean;
    esValido(): boolean;
}

export function analizarIdentificador(identificador: string): boolean {
    const automata: Automata = {
        estadoActual: 1,
        
        cambiarEstado(input: string): boolean {
            const esLetra = /[a-zA-Z]/.test(input);
            switch (this.estadoActual) {
                case 1:
                    if (/\d/.test(input)) {
                        this.estadoActual = 2;
                    } else {
                        return false;
                    }
                    break;
                case 2:
                    if (esLetra) {
                        this.estadoActual = 3;
                    } else {
                        return false;
                    }
                    break;
                case 3:
                    if (esLetra) {
                        this.estadoActual = 3;
                    } else if (input === "_") {
                        this.estadoActual = 4;
                    } else {
                        return false;
                    }
                    break;
                case 4:
                    return false;
            }
            return true;
        },

        esValido(): boolean {
            return this.estadoActual === 4;
        },
    };

    for (let i = 0; i < identificador.length; i++) {
        if (!automata.cambiarEstado(identificador[i])) {
            return false;
        }
    }
    return automata.esValido();
}
