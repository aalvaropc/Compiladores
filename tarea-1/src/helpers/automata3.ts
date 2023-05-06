interface Automata3 {
    estadoActual: number;
    cambiarEstado(input: string): boolean;
    esValido(): boolean;
}

export function analizarIdentificador(identificador: string): boolean {
    const automata: Automata3 = {
        estadoActual: 1,
        cambiarEstado(input: string): boolean {
            
            switch (this.estadoActual) {
                case 1:
                    if (input === 'd') {
                        this.estadoActual = 2;
                    } else if (input === 'p') {
                        this.estadoActual = 5;
                    } else {
                        return false;
                    }
                    break;
                case 2:
                    if (input === 'b') {
                        this.estadoActual = 2;
                    } else if (input === 'e') {
                        this.estadoActual = 3;
                    } else {
                        return false;
                    }
                    break;
                case 3:
                    if (input === 'a') {
                        this.estadoActual = 4;
                    } else {
                        return false;
                    }
                    break;
                case 4:
                    if (input === 'b') {
                        this.estadoActual = 6;
                    } else {
                        return false;
                    }
                    break;
                case 5:
                    if (input === 'q') {
                        this.estadoActual = 3;
                    } else {
                        return false;
                    }
                    break;
                case 6:
                    return false;
            }
            return true;
        },

        esValido(): boolean {
            return this.estadoActual === 6;
        },
    };

    for (let i = 0; i < identificador.length; i++) {
        if (!automata.cambiarEstado(identificador[i])) {
            return false;
        }
    }

    return automata.esValido();
}
