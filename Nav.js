const Nav = {
  template: /* vue-html */`
    <ul class="nav nav-pills nav-justified">
      <li><a href="/">Home</a></li>
      <li><a href="/sobre-mi">Sobre mi</a></li>
      <li><a href="/proyectos">Proyectos</a></li>
      <li><a href="/contacto">Contacto</a></li>
    </ul>`,
}

const nav = Vue.createApp(Nav)

nav.mount('#nav')