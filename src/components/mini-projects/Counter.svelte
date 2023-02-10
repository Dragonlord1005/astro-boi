<!-- We need to make a counter in svelte -->
<script>
    let count = 0;
    function increase() {
        count += 1;
    }
    function decrease() {
        count -= 1;
    }
</script>

<h1>Counter</h1>

<div class="mt-5">
    <p><button on:click={increase} class="border rounded text-green-3 i-ic-baseline-plus?mask"></button> {count} <button on:click={decrease} class="border rounded text-red-5 i-ic-baseline-minus?mask"></button></p>
</div>
