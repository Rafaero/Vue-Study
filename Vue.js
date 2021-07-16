# **Instalação**

O Vue.js foi desenvolvido para ser adotado de forma incremental. Isso significa que pode ser integrado em um projeto de várias maneiras, dependendo dos requisitos.

Existem quatro maneiras principais de adicionar Vue.js a um projeto:

1. Importe-o como um **[pacote CDN](https://v3.vuejs.org/guide/installation.html#cdn)**

    na página

2. Baixe os arquivos JavaScript e **[hospede-os você mesmo](https://v3.vuejs.org/guide/installation.html#download-and-self-host)**
3. Instale-o usando **[npm](https://v3.vuejs.org/guide/installation.html#npm)**
4. Use a **[CLI](https://v3.vuejs.org/guide/installation.html#cli)**

    oficial para estruturar um projeto, que fornece configurações de compilação com baterias para um fluxo de trabalho de front-end moderno (por exemplo, hot-reload, lint-on-save e muito mais)

    ## **O que é Vue.js?**

    Vue (pronuncia-se / vjuː /, como **view** ) é uma **estrutura progressiva** para construir interfaces de usuário. Ao contrário de outras estruturas monolíticas, o Vue foi projetado desde o início para ser adotado de forma incremental. A biblioteca central concentra-se apenas na camada de visualização e é fácil de selecionar e integrar com outras bibliotecas ou projetos existentes. Por outro lado, o Vue também é perfeitamente capaz de fornecer aplicativos sofisticados de página única quando usado em combinação com **[ferramentas modernas](https://v3.vuejs.org/guide/single-file-component.html)** e **[bibliotecas de suporte (abre uma nova janela)](https://github.com/vuejs/awesome-vue#components--libraries)**.

    Se você gostaria de saber mais sobre o Vue antes de mergulhar, **[criamos um vídeo que](https://v3.vuejs.org/guide/introduction.html#)** mostra os princípios básicos e um projeto de amostra.
                               ## **Renderização Declarativa**

No núcleo do Vue.js está um sistema que nos permite renderizar dados declarativamente para o DOM usando a sintaxe de modelo simples:

```
<div id="counter">
  Counter: {{ counter }}</div>
```

```
const Counter = {
  data() {
    return {
      counter: 0
    }
  }
}
Vue.createApp(Counter).mount('#counter')

```

Já criamos nosso primeiro aplicativo Vue! Isso se parece muito com a renderização de um modelo de string, mas Vue fez muito trabalho nos bastidores. Os dados e o DOM agora estão vinculados e tudo agora é **reativo** . Como nós sabemos? Dê uma olhada no exemplo abaixo, onde a `counter`propriedade é incrementada a cada segundo e você verá como o DOM renderizado muda:

```
const Counter = {
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}

```

Contador: 164

Parar cronômetro

Além da interpolação de texto, também podemos vincular atributos de elemento como este:

```
<div id="bind-attribute"><span v-bind:title="message">
    Hover your mouse over me for a few seconds to see my dynamically bound
    title!</span></div>
```

```
const AttributeBinding = {
  data() {
    return {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  }
}
Vue.createApp(AttributeBinding).mount('#bind-attribute')

```

Aqui estamos encontrando algo novo. O `v-bind`atributo que você está vendo é chamado de **diretiva** . As diretivas são prefixadas com `v-`para indicar que são atributos especiais fornecidos pelo Vue e, como você deve ter adivinhado, elas aplicam um comportamento reativo especial ao DOM renderizado. Aqui estamos basicamente dizendo " *mantenha o `title`atributo deste elemento atualizado com a `message`propriedade na instância ativa atual.* "

 ## **Manipulação de entrada do usuário**

Para permitir que os usuários interajam com seu aplicativo, podemos usar a `v-on`diretiva para anexar ouvintes de eventos que invocam métodos em nossas instâncias:

```
<div id="event-handling"><p>{{ message }}</p><button v-on:click="reverseMessage">Reverse Message</button></div>
```

```
const EventHandling = {
  data() {
    return {
      message: 'Hello Vue.js!'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
  }
}
Vue.createApp(EventHandling).mount('#event-handling')

```

Observe que, neste método, atualizamos o estado de nosso aplicativo sem tocar no DOM - todas as manipulações do DOM são tratadas pelo Vue, e o código que você escreve é focado na lógica subjacente.

O Vue também fornece a `v-model`diretiva que torna a ligação bidirecional entre a entrada do formulário e o estado do aplicativo uma brisa:

```
<div id="two-way-binding"><p>{{ message }}</p><input v-model="message" /></div>
```

`const TwoWayBinding = {
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}
Vue.createApp(TwoWayBinding).mount('#two-way-binding')`
                                                                                            
                                                                                            Manipulação de entrada do usuário
Para permitir que os usuários interajam com seu aplicativo, podemos usar a v-ondiretiva para anexar ouvintes de eventos que invocam métodos em nossas instâncias:

<div id="event-handling">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
</div>
const EventHandling = {
  data() {
    return {
      message: 'Hello Vue.js!'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
  }
}

Vue.createApp(EventHandling).mount('#event-handling')

Observe que, neste método, atualizamos o estado de nosso aplicativo sem tocar no DOM - todas as manipulações do DOM são tratadas pelo Vue, e o código que você escreve é ​​focado na lógica subjacente.

O Vue também fornece a v-modeldiretiva que torna a ligação bidirecional entre a entrada do formulário e o estado do aplicativo uma brisa:

<div id="two-way-binding">
  <p>{{ message }}</p>
  <input v-model="message" />
</div>
const TwoWayBinding = {
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}

Vue.createApp(TwoWayBinding).mount('#two-way-binding')

#Condicionais e Loops
Também é fácil alternar a presença de um elemento:

<div id="conditional-rendering">
  <span v-if="seen">Now you see me</span>
</div>
const ConditionalRendering = {
  data() {
    return {
      seen: true
    }
  }
}

Vue.createApp(ConditionalRendering).mount('#conditional-rendering')
Este exemplo demonstra que podemos vincular dados não apenas a texto e atributos, mas também à estrutura do DOM. Além disso, o Vue também fornece um sistema de efeito de transição poderoso que pode aplicar efeitos de transição automaticamente quando os elementos são inseridos / atualizados / removidos pelo Vue.

Você pode mudar seende truepara falsena caixa de areia abaixo para verificar o efeito:


Existem algumas outras diretivas, cada uma com sua funcionalidade especial. Por exemplo, a v-fordiretiva pode ser usada para exibir uma lista de itens usando os dados de uma matriz:

<div id="list-rendering">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
const ListRendering = {
  data() {
    return {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  }
}

Vue.createApp(ListRendering).mount('#list-rendering')

Compondo com componentes
O sistema de componentes é outro conceito importante no Vue, porque é uma abstração que nos permite construir aplicativos em grande escala compostos de componentes pequenos, independentes e frequentemente reutilizáveis. Se pensarmos bem, quase qualquer tipo de interface de aplicativo pode ser abstraído em uma árvore de componentes:

Árvore de Componentes

No Vue, um componente é essencialmente uma instância com opções predefinidas. Registrar um componente no Vue é simples: criamos um objeto de componente como fizemos com os Appobjetos e o definimos na componentsopção do pai :

// Create Vue application
const app = Vue.createApp(...)

// Define a new component called todo-item
app.component('todo-item', {
  template: `<li>This is a todo</li>`
})

// Mount Vue application
app.mount(...)
Agora você pode compor no modelo de outro componente:

<ol>
  <!-- Create an instance of the todo-item component -->
  <todo-item></todo-item>
</ol>
Mas isso renderizaria o mesmo texto para todas as tarefas, o que não é muito interessante. Devemos ser capazes de passar dados do escopo pai para os componentes filhos. Vamos modificar a definição do componente para que aceite um prop :

app.component('todo-item', {
  props: ['todo'],
  template: `<li>{{ todo.text }}</li>`
})
Agora podemos passar a tarefa para cada componente repetido usando v-bind:

<div id="todo-list-app">
  <ol>
    <!--
      Now we provide each todo-item with the todo object
      it's representing, so that its content can be dynamic.
      We also need to provide each component with a "key",
      which will be explained later.
    -->
    <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"
    ></todo-item>
  </ol>
</div>
const TodoList = {
  data() {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  }
}

const app = Vue.createApp(TodoList)

app.component('todo-item', {
  props: ['todo'],
  template: `<li>{{ todo.text }}</li>`
})

app.mount('#todo-list-app')

Este é um exemplo artificial, mas conseguimos separar nosso aplicativo em duas unidades menores, e o filho está razoavelmente bem desacoplado do pai por meio da interface de adereços. Agora podemos melhorar ainda mais nosso <todo-item>componente com um modelo e lógica mais complexos sem afetar o aplicativo pai.

Em um aplicativo grande, é necessário dividir todo o aplicativo em componentes para tornar o desenvolvimento gerenciável. Falaremos muito mais sobre os componentes posteriormente neste guia , mas aqui está um exemplo (imaginário) de como o modelo de um aplicativo pode se parecer com os componentes:

<div id="app">
  <app-nav></app-nav>
  <app-view>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
  </app-view>
</div>
#Relação com elementos personalizados
Você deve ter notado que os componentes do Vue são muito semelhantes aos elementos personalizados , que fazem parte das especificações dos componentes da Web (abre uma nova janela). Isso ocorre porque a sintaxe do componente do Vue é modelada livremente após a especificação. Por exemplo, os componentes do Vue implementam a API Slot (abre uma nova janela)e o isatributo especial. No entanto, existem algumas diferenças importantes:

As especificações dos componentes da Web foram finalizadas, mas não foram implementadas nativamente em todos os navegadores. Safari 10.1+, Chrome 54+ e Firefox 63+ oferecem suporte nativo a componentes da web. Em comparação, os componentes do Vue funcionam de forma consistente em todos os navegadores suportados (exceto Internet Explorer 11 - verifique os detalhes aqui (abre uma nova janela)) Quando necessário, os componentes do Vue também podem ser agrupados em um elemento personalizado nativo.
Os componentes do Vue fornecem recursos importantes que não estão disponíveis em elementos personalizados simples, principalmente o fluxo de dados entre componentes, comunicação de eventos personalizados e integrações de ferramentas de construção.
Embora o Vue não use elementos personalizados internamente, ele tem uma grande interoperabilidade (abre uma nova janela)quando se trata de consumir ou distribuir como elementos personalizados. O Vue CLI também suporta a construção de componentes Vue que se registram como elementos nativos personalizados.

#
