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

Instâncias de aplicativos e componentes
#Criação de uma instância de aplicativo
Cada aplicativo Vue começa criando uma nova instância de aplicativo com a createAppfunção:

const app = Vue.createApp({
  /* options */
})
A instância do aplicativo é usada para registrar 'globais' que podem então ser usados ​​por componentes dentro desse aplicativo. Discutiremos isso em detalhes posteriormente no guia, mas como um exemplo rápido:

const app = Vue.createApp({})
app.component('SearchInput', SearchInputComponent)
app.directive('focus', FocusDirective)
app.use(LocalePlugin)
A maioria dos métodos expostos pela instância do aplicativo retorna a mesma instância, permitindo o encadeamento:

Vue.createApp({})
  .component('SearchInput', SearchInputComponent)
  .directive('focus', FocusDirective)
  .use(LocalePlugin)
Você pode navegar na API completa do aplicativo na referência da API .


O Componente Raiz
As opções passadas para createAppsão usadas para configurar o componente raiz . Esse componente é usado como ponto de partida para a renderização quando montamos o aplicativo.

Um aplicativo precisa ser montado em um elemento DOM. Por exemplo, se quisermos montar um aplicativo Vue <div id="app"></div>, devemos passar #app:

const RootComponent = {
  /* options */
}
const app = Vue.createApp(RootComponent)
const vm = app.mount('#app')
Ao contrário da maioria dos métodos de aplicativo, mountnão retorna o aplicativo. Em vez disso, ele retorna a instância do componente raiz.

Embora não seja estritamente associado ao padrão MVVM (abre uma nova janela), O design de Vue foi parcialmente inspirado por ele. Por convenção, costumamos usar a variável vm(abreviação de ViewModel) para nos referir a uma instância do componente.

Embora todos os exemplos nesta página precisem apenas de um único componente, a maioria dos aplicativos reais são organizados em uma árvore de componentes aninhados e reutilizáveis. Por exemplo, a árvore de componentes de um aplicativo Todo pode ter a seguinte aparência:

Root Component
└─ TodoList
   ├─ TodoItem
   │  ├─ DeleteTodoButton
   │  └─ EditTodoButton
   └─ TodoListFooter
      ├─ ClearTodosButton
      └─ TodoListStatistics
Cada componente terá sua própria instância de componente vm,. Para alguns componentes, como TodoItem, provavelmente haverá várias instâncias renderizadas a qualquer momento. Todas as instâncias do componente neste aplicativo compartilharão a mesma instância do aplicativo.

Falaremos sobre o sistema de componentes em detalhes mais tarde. Por enquanto, apenas esteja ciente de que o componente raiz não é realmente diferente de qualquer outro componente. As opções de configuração são as mesmas, assim como o comportamento da instância do componente correspondente.

#

Propriedades da instância do componente
No início do guia, encontramos datapropriedades. As propriedades definidas em datasão expostas por meio da instância do componente:

const app = Vue.createApp({
  data() {
    return { count: 4 }
  }
})

const vm = app.mount('#app')

console.log(vm.count) // => 4
Existem várias outras opções de componentes que agregam propriedades definidas pelo usuário para a instância do componente, como methods, props, computed, injecte setup. Discutiremos cada um deles em detalhes posteriormente neste guia. Todas as propriedades da instância do componente, não importa como sejam definidas, estarão acessíveis no modelo do componente.

O Vue também expõe algumas propriedades integradas por meio da instância do componente, como $attrse $emit. Todas essas propriedades têm um $prefixo para evitar conflito com nomes de propriedade definidos pelo usuário.

Lifecycle Hooks
Cada instância do componente passa por uma série de etapas de inicialização quando é criada - por exemplo, ele precisa configurar a observação de dados, compilar o modelo, montar a instância no DOM e atualizar o DOM quando os dados forem alterados. Ao longo do caminho, ele também executa funções chamadas ganchos de ciclo de vida , dando aos usuários a oportunidade de adicionar seu próprio código em estágios específicos.

Por exemplo, o gancho criado pode ser usado para executar o código após a criação de uma instância:

Vue.createApp({
  data() {
    return { count: 1 }
  },
  created() {
    // `this` points to the vm instance
    console.log('count is: ' + this.count) // => "count is: 1"
  }
})
Existem também outros ganchos que serão chamados em diferentes estágios do ciclo de vida da instância, como montado , atualizado e desmontado . Todos os ganchos de ciclo de vida são chamados com seu thiscontexto apontando para a instância ativa atual que o invoca.

GORJETA

Não use funções de seta (abre uma nova janela)em uma propriedade de opções ou retorno de chamada, como created: () => console.log(this.a)ou vm.$watch('a', newValue => this.myMethod()). Como uma função de seta não tem um this, thisserá tratada como qualquer outra variável e lexicalmente pesquisada por meio de escopos pai até ser encontrada, geralmente resultando em erros como Uncaught TypeError: Cannot read property of undefinedou Uncaught TypeError: this.myMethod is not a function.

Diagrama de Ciclo de Vida
Abaixo está um diagrama para o ciclo de vida da instância. Você não precisa entender completamente tudo o que está acontecendo agora, mas conforme você aprende e constrói mais, será uma referência útil.

Ganchos de ciclo de vida da instância

Sintaxe de modelo
Vue.js usa uma sintaxe de modelo baseada em HTML que permite vincular declarativamente o DOM renderizado aos dados da instância do componente subjacente. Todos os modelos Vue.js são HTML válidos que podem ser analisados ​​por navegadores compatíveis com as especificações e analisadores HTML.

Sob o capô, o Vue compila os modelos em funções de renderização do Virtual DOM. Combinado com o sistema de reatividade, o Vue é capaz de descobrir de forma inteligente o número mínimo de componentes para renderizar novamente e aplicar a quantidade mínima de manipulações DOM quando o estado do aplicativo muda.

Se você está familiarizado com os conceitos do Virtual DOM e prefere o poder bruto do JavaScript, também pode escrever funções de renderização diretamente em vez de modelos, com suporte JSX opcional.

#Interpolações
#Texto
A forma mais básica de vinculação de dados é a interpolação de texto usando a sintaxe "Mustache" (chaves duplas):

<span>Message: {{ msg }}</span>
A tag do bigode será substituída pelo valor da msgpropriedade da instância do componente correspondente. Ele também será atualizado sempre que a msgpropriedade for alterada.

Você também pode realizar interpolações únicas que não são atualizadas na mudança de dados usando a diretiva v-once , mas tenha em mente que isso também afetará quaisquer outras ligações no mesmo nó:

<span v-once>This will never change: {{ msg }}</span>

HTML bruto
Os bigodes duplos interpretam os dados como texto simples, não HTML. Para gerar HTML real, você precisará usar a v-htmldiretiva :

<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>

O conteúdo do spanserá substituído pelo valor da rawHtmlpropriedade, interpretado como HTML simples - as ligações de dados são ignoradas. Observe que você não pode usar v-htmlpara compor parciais de modelo, porque o Vue não é um mecanismo de modelagem baseado em string. Em vez disso, os componentes são preferidos como a unidade fundamental para a reutilização e composição da IU.

GORJETA

Renderizar HTML arbitrário de forma dinâmica em seu site pode ser muito perigoso porque pode facilmente levar a vulnerabilidades de XSS (abre uma nova janela). Use interpolação HTML apenas em conteúdo confiável e nunca em conteúdo fornecido pelo usuário

Atributos
Bigodes não podem ser usados ​​em atributos HTML. Em vez disso, use uma v-binddiretiva :

<div v-bind:id="dynamicId"></div>
Se o valor vinculado for nullou undefined, o atributo não será incluído no elemento renderizado.

No caso de atributos booleanos, onde sua mera existência implica true, v-bindfunciona de maneira um pouco diferente. Por exemplo:

<button v-bind:disabled="isButtonDisabled">Button</button>
O disabledatributo será incluído se isButtonDisabledtiver um valor verdadeiro. Também será incluído se o valor for uma string vazia, mantendo a consistência com <button disabled="">. Para outros valores falsos, o atributo será omitido.

Atributos
Bigodes não podem ser usados ​​em atributos HTML. Em vez disso, use uma v-binddiretiva :

<div v-bind:id="dynamicId"></div>
Se o valor vinculado for nullou undefined, o atributo não será incluído no elemento renderizado.

No caso de atributos booleanos, onde sua mera existência implica true, v-bindfunciona de maneira um pouco diferente. Por exemplo:

<button v-bind:disabled="isButtonDisabled">Button</button>
O disabledatributo será incluído se isButtonDisabledtiver um valor verdadeiro. Também será incluído se o valor for uma string vazia, mantendo a consistência com <button disabled="">. Para outros valores falsos, o atributo será omitido.

#Usando expressões JavaScript
Até agora, estivemos apenas vinculando a chaves de propriedade simples em nossos modelos. Mas Vue.js, na verdade, oferece suporte a todo o poder das expressões JavaScript dentro de todas as vinculações de dados:

{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div v-bind:id="'list-' + id"></div>
Essas expressões serão avaliadas como JavaScript no escopo de dados da instância ativa atual. Uma restrição é que cada ligação pode conter apenas uma única expressão , então o seguinte NÃO funcionará:

<!-- this is a statement, not an expression: -->
{{ var a = 1 }}

<!-- flow control won't work either, use ternary expressions -->
{{ if (ok) { return message } }}

Diretivas
As diretivas são atributos especiais com o v-prefixo. Espera-se que os valores de atributo de diretiva sejam uma única expressão JavaScript (com exceção de v-fore v-on, que será discutido posteriormente). O trabalho de uma diretiva é aplicar reativamente efeitos colaterais ao DOM quando o valor de sua expressão muda. Vamos revisar o exemplo que vimos na introdução:

<p v-if="seen">Now you see me</p>
Aqui, a v-ifdiretiva removeria / inseriria o <p>elemento com base na veracidade do valor da expressão seen.

#Argumentos
Algumas diretivas podem receber um "argumento", denotado por dois pontos após o nome da diretiva. Por exemplo, a v-binddiretiva é usada para atualizar reativamente um atributo HTML:

<a v-bind:href="url"> ... </a>
Aqui hrefestá o argumento, que diz à v-binddiretiva para vincular o hrefatributo do elemento ao valor da expressão url.

Outro exemplo é a v-ondiretiva, que escuta os eventos DOM:

<a v-on:click="doSomething"> ... </a>
Aqui, o argumento é o nome do evento a ser ouvido. Também falaremos sobre o tratamento de eventos com mais detalhes.

Modificadores
Os modificadores são pós-correções especiais denotadas por um ponto, que indicam que uma diretiva deve ser vinculada de alguma forma especial. Por exemplo, o .preventmodificador diz à v-ondiretiva para chamar event.preventDefault()o evento disparado:

<form v-on:submit.prevent="onSubmit">...</form>
Você verá outros exemplos de modificadores posteriormente, parav-on e parav-model , quando explorarmos esses recursos.

#Taquigrafia
O v-prefixo serve como uma dica visual para identificar atributos específicos do Vue em seus modelos. Isso é útil quando você está usando o Vue.js para aplicar o comportamento dinâmico a alguma marcação existente, mas pode parecer prolixo para algumas diretivas usadas com frequência. Ao mesmo tempo, a necessidade do v-prefixo se torna menos importante quando você está construindo um SPA (abre uma nova janela), onde o Vue gerencia todos os modelos. Portanto, o Vue fornece atalhos especiais para duas das diretivas mais usadas v-binde v-on:

#v-bind Forma abreviada
<!-- full syntax -->
<a v-bind:href="url"> ... </a>

<!-- shorthand -->
<a :href="url"> ... </a>

<!-- shorthand with dynamic argument -->
<a :[key]="url"> ... </a>
#v-on Forma abreviada
<!-- full syntax -->
<a v-on:click="doSomething"> ... </a>

<!-- shorthand -->
<a @click="doSomething"> ... </a>

<!-- shorthand with dynamic argument -->
<a @[event]="doSomething"> ... </a>
Eles podem parecer um pouco diferente de HTML normal, mas :e @são caracteres válidos para nomes de atributos e todos os navegadores Vue-suportados podem analisá-lo corretamente. Além disso, eles não aparecem na marcação final renderizada. A sintaxe abreviada é totalmente opcional, mas você provavelmente irá apreciá-la quando aprender mais sobre seu uso posteriormente.

Da próxima página em diante, usaremos a abreviatura em nossos exemplos, pois é o uso mais comum para desenvolvedores Vue.

#Ressalvas
#Restrições de valor de argumento dinâmico
Espera-se que os argumentos dinâmicos sejam avaliados como uma string, com exceção de null. O valor especial nullpode ser usado para remover explicitamente a ligação. Qualquer outro valor não string disparará um aviso.

#Restrições de expressão de argumento dinâmico
Expressões de argumento dinâmico têm algumas restrições de sintaxe porque certos caracteres, como espaços e aspas, são inválidos dentro de nomes de atributos HTML. Por exemplo, o seguinte é inválido:

<!-- This will trigger a compiler warning. -->
<a v-bind:['foo' + bar]="value"> ... </a>
Recomendamos substituir quaisquer expressões complexas por uma propriedade computada , uma das peças mais fundamentais do Vue, que abordaremos em breve.

Ao usar modelos in-DOM (modelos escritos diretamente em um arquivo HTML), você também deve evitar nomear chaves com caracteres maiúsculos, pois os navegadores irão forçar os nomes dos atributos para minúsculas:

<!--
This will be converted to v-bind:[someattr] in in-DOM templates.
Unless you have a "someattr" property in your instance, your code won't work.
-->
<a v-bind:[someAttr]="value"> ... </a>
#Expressões JavaScript
Expressões de modelo são colocadas em sandbox e só têm acesso a uma lista restrita de globais (abre uma nova janela)como Mathe Date. Você não deve tentar acessar globais definidos pelo usuário em expressões de modelo.
