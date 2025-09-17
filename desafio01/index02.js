
class Lanche {
  constructor() {
    this.pao = false;
    this.carne = false;
    this.queijo = false;
    this.salada = false;
    this.molho = false;
  }

  show() {
    console.log("Lanche:", {
      pao: this.pao ? "Sim" : "Não",
      carne: this.carne ? "Sim" : "Não",
      queijo: this.queijo ? "Sim" : "Não",
      salada: this.salada ? "Sim" : "Não",
      molho: this.molho ? "Sim" : "Não",
    });
  }
}

class LancheBuilder {
  constructor() {
    this.lanche = new Lanche();
  }

  addPao() {
    this.lanche.pao = true;
    return this;
  }

  addCarne() {
    this.lanche.carne = true;
    return this;
  }

  addQueijo() {
    this.lanche.queijo = true;
    return this;
  }

  addSalada() {
    this.lanche.salada = true;
    return this;
  }

  addMolho() {
    this.lanche.molho = true;
    return this;
  }

  build() {
    return this.lanche;
  }
}

class LancheDirector {
  static buildLancheSimples() {
    return new LancheBuilder()
      .addPao()
      .addCarne()
      .build();
  }

  static buildLancheCompleto() {
    return new LancheBuilder()
      .addPao()
      .addCarne()
      .addQueijo()
      .addSalada()
      .addMolho()
      .build();
  }

  static buildLancheVegetariano() {
    return new LancheBuilder()
      .addPao()
      .addQueijo()
      .addSalada()
      .addMolho()
      .build();
  }

  static buildLancheCarneCompleto() {
    return new LancheBuilder()
      .addPao()
      .addCarne()
      .addQueijo()
      .addMolho()
      .build();
  }
}

function main() {
  console.log("=== Lanchonete - Padrão Builder ===\n");

  const lancheSimples = LancheDirector.buildLancheSimples();
  const lancheCompleto = LancheDirector.buildLancheCompleto();
  const lancheVegetariano = LancheDirector.buildLancheVegetariano();
  const lancheCarneCompleto = LancheDirector.buildLancheCarneCompleto();

  console.log("1. Lanche Simples:");
  lancheSimples.show();

  console.log("\n2. Lanche Completo:");
  lancheCompleto.show();

  console.log("\n3. Lanche Vegetariano:");
  lancheVegetariano.show();

  console.log("\n4. Lanche Carne Completo:");
  lancheCarneCompleto.show();

  console.log("\n5. Lanche Personalizado:");
  const lanchePersonalizado = new LancheBuilder()
    .addPao()
    .addCarne()
    .addSalada()
    .build();
  
  lanchePersonalizado.show();
}

main();