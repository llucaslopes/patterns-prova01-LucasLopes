class LightButton {
  render() {
    return "Botão branco criado";
  }
}

class DarkButton {
  render() {
    return "Botão preto criado";
  }
}

class LightWindow {
  render() {
    return "Janela clara aberta";
  }
}

class DarkWindow {
  render() {
    return "Janela escura aberta";
  }
}

// Abstract Factory
class UIThemeFactory {
  createButton() {
    throw new Error("Método abstrato deve ser implementado");
  }
  
  createWindow() {
    throw new Error("Método abstrato deve ser implementado");
  }
}

// Concrete Factories
class LightThemeFactory extends UIThemeFactory {
  createButton() {
    return new LightButton();
  }
  
  createWindow() {
    return new LightWindow();
  }
}

class DarkThemeFactory extends UIThemeFactory {
  createButton() {
    return new DarkButton();
  }
  
  createWindow() {
    return new DarkWindow();
  }
}

// Cliente
const themeFactories = {
  light: new LightThemeFactory(),
  dark: new DarkThemeFactory(),
};

class UIApplication {
  constructor(factory) {
    this.button = factory.createButton();
    this.window = factory.createWindow();
  }
  
  renderUI() {
    console.log(this.button.render());
    console.log(this.window.render());
  }
}

// Função principal
function main() {
  const themes = ["light", "dark"];
  
  themes.forEach((theme) => {
    console.log(`\n>> Tema selecionado: ${theme} <<`);
    const factory = themeFactories[theme];
    if (!factory) throw new Error("Tema não suportado");
    
    const app = new UIApplication(factory);
    app.renderUI();
  });
}

main();