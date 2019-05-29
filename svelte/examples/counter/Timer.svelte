<script>
    import { count } from './store.js';
    
    setInterval(()=> {
        count.update(n => n + 1);
    }, 1000);
</script>

<output>Timer {$count}</output>