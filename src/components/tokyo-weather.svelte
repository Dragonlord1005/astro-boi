<!-- We need to pull weather data for tokyo from a weather api -->
<!-- We need to display the high and low temperature in celsius and farenheit -->
<!-- We need to show the wind direction and the kmph -->
<!-- We need to show the humidity and precipation as percentages -->
<!-- We need to show the weather icon -->
<!-- The api is pulled here, not another component -->

<script>
    // We need to use the fetch api
    import { onMount } from 'svelte';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=3a3b3c3d3e3f3g3h3i3j3k3l3m3n3o3p3q3r3s3t3u3v3w3x3y3z')
        .then(res => res.json())
        .then(data => {
            console.log(data);

            
        });
</script>

<div>

</div>
