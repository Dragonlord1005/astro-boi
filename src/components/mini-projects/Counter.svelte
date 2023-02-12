<!-- We need to make a counter in svelte -->
<script>
    import { atom } from 'nanostores'
    let count = atom(0);
    function increase() {
        count.set(count.get() + 1) ;
    }
    function decrease() {
        count.set(count.get() - 1)
    }
</script>

<div class="content-center">
    <!-- TODO: Fix the counter so it's not just slightly above everything -->
    <p><button on:click={increase} class="border rounded text-green-3 i-ic-baseline-plus?mask"></button>{$count}<button on:click={decrease} class="border rounded text-red-5 i-ic-baseline-minus?mask"></button></p>
</div>
