<nav> 
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/login">Login</a>
	<a href="/task">Task</a>

</nav>

<slot></slot>

<footer style:margin-top="60px"> All Right Reserved. </footer>

<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>
