<template>
  <div class="theme-container">
    <h1>{{ $site.title }}</h1>
    <p>{{ $site.description }}</p>
    <Content/>
  </div>
  <Debug/>
</template>

<style>
.theme-container {
  font-family: Arial, Helvetica, sans-serif;
  color: #2f495e;
}
a {
  color: #00c58e;
}
</style>
