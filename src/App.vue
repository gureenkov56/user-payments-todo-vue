<template>
  <teleport to="head">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
  </teleport>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Пользователи</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/payments">Платежи</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <div class="container">
    <router-view/>
  </div>
</template>

<style>
#app {
  margin-top: 63px; /* header */
}

a.router-link-active {
  color: white !important;
}
</style>
