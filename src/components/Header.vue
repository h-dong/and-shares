<template>
  <header>
    <img src="../assets/logo.png" alt="logo">
    <h3><small>shares</small></h3>
    <nav>
      <ul>
        <li><a href="https://github.com/hdong92/and-shares">Github</a></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  header {
    display: flex;
    border-bottom: .05rem solid #cccccc;
    margin: 1rem 0;

    img {
      width: 100px;
      padding-right: 0.5rem;
      height: 35px;
    }

    nav {
      width: 100%;

      ul {
        margin: 0;
        height: 100%;

        li {
          display: flex;
          align-items: center;
          justify-content: right;
          height: 100%;
        }
      }
    }
  }
</style>
