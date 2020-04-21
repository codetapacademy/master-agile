<script>
  import { Router, Link, Route } from "svelte-routing";
  import CornelCristianFilip from "./cornel-cristian-filip/cornel-cristian-filip.svelte";
  export let name;
  export let url = "";
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Sanatate si virtute, cin' te prinde cine te bucura: {name}!</h1>
  <Router {url}>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cornel-cristian-filip">Cornel Cristian Filip</Link>
    </nav>
    <Route path="/cornel-cristian-filip" component={CornelCristianFilip} />
    <!-- <Route path='/cornel-cristian-filip' component="{}"></Route> -->
  </Router>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</main>
