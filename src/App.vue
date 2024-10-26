<template>
    <h1>Hello Router!</h1>
    <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>
    <nav>
      <RouterLink to="/">
          <button>Ir al Home</button>
      </RouterLink>
      <RouterLink to="/about">
        <button>Ver el Acerca de</button>
      </RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </template>
