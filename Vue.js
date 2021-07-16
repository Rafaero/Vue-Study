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
