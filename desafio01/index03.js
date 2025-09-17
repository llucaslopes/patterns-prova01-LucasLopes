// Classes concretas para transportes
class Bicicleta {
  move() {
    return "Pedalando a bicicleta no pátio da UNISATC";
  }
}

class Patinete {
  move() {
    return "Andando de patinete pelo estacionamento da UNISATC";
  }
}

class Onibus {
  move() {
    return "Andando de ônibus e chegando na UNISATC";
  }
}

class Carro {
  move() {
    return "Dirigindo carro até a UNISATC";
  }
}

class Motocicleta {
  move() {
    return "Pilotando motocicleta até a UNISATC";
  }
}

// Factory Method Pattern
class TransporteFactory {
  static tipos = {
    bicicleta: Bicicleta,
    patinete: Patinete,
    onibus: Onibus,
    carro: Carro,
    motocicleta: Motocicleta,
  };

  static createTransporte(tipo) {
    const TransporteClass = this.tipos[tipo];
    if (!TransporteClass) {
      throw new Error("Tipo de transporte não suportado");
    }
    return new TransporteClass();
  }
}

// Função principal
function main() {
  console.log("=== UNISATC - Sistema de Transportes ===\n");

  const tiposTransporte = ["bicicleta", "patinete", "onibus", "carro", "motocicleta"];

  try {
    tiposTransporte.forEach((tipo) => {
      console.log(`--- ${tipo.toUpperCase()} ---`);
      const transporte = TransporteFactory.createTransporte(tipo);
      console.log(transporte.move());
      console.log();
    });
  } catch (err) {
    console.error("Erro ao criar transporte:", err.message);
  }

  // Exemplo de uso específico
  console.log("=== Exemplo de uso específico ===");
  const meuTransporte = TransporteFactory.createTransporte("bicicleta");
  console.log(meuTransporte.move());
}

main();
