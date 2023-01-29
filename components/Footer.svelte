<script>
    import FOOTER_DATA from "../src/data/footer.data";
</script>

<footer class="mt-48 py-24 bg-orange-200 flex flex-wrap justify-evenly">
    {#each FOOTER_DATA as footer_data}
    <div>
        <h4 class="font-bold">{footer_data.heading}</h4>
        <ul>
            {#each footer_data.footer as footer_item}
                <li><a href={footer_item.url}>{footer_item.title}</a></li>
            {/each}
        </ul>
    </div>
    {/each}
</footer>