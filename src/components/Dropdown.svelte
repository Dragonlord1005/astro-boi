<script lang="ts">
  let isPressed = false;

  const toggleIsPressed = () => {
    isPressed = !isPressed;
  };
</script>

<nav class="block flex justify-between brand-bg p-3 md:hidden">
  <div class="flex-grow">
    <div>
      <button
        type="button"
        class="nav-menu"
        on:click={toggleIsPressed}
        aria-pressed={isPressed}
        aria-label="Toggle navigation menu"
      >
      </button>
      {#if isPressed}
      <div id="menu" class="bg-gray-9 shadow-lg rounded-lg p-3">
        <a href="/" class="nav-link">Home</a>
        <a href="/about" class="nav-link">About</a>
        <a href="/projects" class="nav-link">Projects</a>
        <a href="/blog" class="nav-link">Blog</a>
      </div>
      {/if}
    </div>
  </div>
</nav>

<style scoped>
  .nav-menu {
    --at-apply: "inline-block text-white h-6 w-6 fill-current focus:outline-none i-material-symbols-menu";
  }
</style>