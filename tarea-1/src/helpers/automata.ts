interface Automata2 {
    estadoActual: number;
    cambiarEstado(input: string): boolean;
    esValido(): boolean;
}

export function analizarIdentificador(identificador: string): boolean {
    const automata: Automata2 = {
        estadoActual: 1,
        cambiarEstado(input: string): boolean {
            const esLetra = /[a-zA-Z]/.test(input);
            const esNumero = /[0-9]/.test(input);
            const esGuionBajo = /_/.test(input);
            const esEspacio = /\s/.test(input);
            const esCaracterEspecial = /[^\s\w"]/.test(input);

            switch (this.estadoActual) {
                case 1:
                    if (input === '"') {
                        this.estadoActual = 2;
                    } else {
                        return false;
                    }
                    break;
                case 2:
                    if (esLetra || esNumero || esGuionBajo || esEspacio || esCaracterEspecial) {
                        this.estadoActual = 2;
                    } else if (input === '"') {
                        this.estadoActual = 3;
                    } else {
                        return false;
                    }
                    break;
                case 3:
                    return false;
            }
            return true;
        },

        esValido(): boolean {
            return this.estadoActual === 3;
        },
    };

    for (let i = 0; i < identificador.length; i++) {
        if (!automata.cambiarEstado(identificador[i])) {
            return false;
        }
    }

    return automata.esValido();
}
