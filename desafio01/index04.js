// Classe Config com padrão Singleton
class Config {
  constructor() {
    if (Config.instance) {
      return Config.instance;
    }
    this.settings = {};
    Config.instance = this;
  }

  setConfig(key, value) {
    this.settings[key] = value;
    console.log(`Configuração definida: ${key} = ${value}`);
  }

  getConfig(key) {
    const value = this.settings[key];
    console.log(`Configuração obtida: ${key} = ${value}`);
    return value;
  }

  getAllConfigs() {
    console.log("Todas as configurações:", this.settings);
    return this.settings;
  }

  clearConfig() {
    this.settings = {};
    console.log("Todas as configurações foram limpas");
  }
}

// Função principal
function main() {
  console.log("=== Sistema de Configuração - Padrão Singleton ===\n");

  // Criando múltiplas "instâncias" (na verdade, todas retornam a mesma instância)
  const config1 = new Config();
  const config2 = new Config();
  const config3 = new Config();

  // Verificando se são a mesma instância
  console.log("config1 === config2:", config1 === config2);
  console.log("config2 === config3:", config2 === config3);
  console.log("config1 === config3:", config1 === config3);
  console.log();

  // Definindo configurações em uma "instância"
  console.log("--- Definindo configurações ---");
  config1.setConfig("lang", "pt-BR");
  config1.setConfig("theme", "dark");
  config1.setConfig("debug", true);
  config1.setConfig("api_url", "https://api.unisatc.com");
  console.log();

  // Acessando configurações de outras "instâncias"
  console.log("--- Acessando configurações de diferentes 'instâncias' ---");
  console.log("Config2 obtém configuração de lang:", config2.getConfig("lang"));
  console.log("Config3 obtém configuração de theme:", config3.getConfig("theme"));
  console.log("Config1 obtém configuração de debug:", config1.getConfig("debug"));
  console.log();

  // Modificando configuração de uma "instância" e verificando em outra
  console.log("--- Modificando configuração ---");
  config2.setConfig("lang", "en-US");
  console.log("Config1 verifica lang após modificação:", config1.getConfig("lang"));
  console.log();

  // Exibindo todas as configurações
  console.log("--- Todas as configurações ---");
  config3.getAllConfigs();
  console.log();

  // Limpando configurações
  console.log("--- Limpando configurações ---");
  config1.clearConfig();
  config2.getAllConfigs();
  console.log();

  // Verificando que a limpeza afeta todas as "instâncias"
  console.log("Config3 verifica configuração após limpeza:", config3.getConfig("lang"));
}

main();
