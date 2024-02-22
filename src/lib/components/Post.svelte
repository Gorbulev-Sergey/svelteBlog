<script>
	import { Post } from '$lib/models/post';

	export let post = new Post();
</script>

<div class="bg-light text-dark rounded py-3 h-100">
	<h2 class="mx-3">{post.title}</h2>
	<small class="mx-3">{post.created}</small>
	<div
		class="my-3"
		style="background-image: url({post.cover}); min-height:14em; background-size:cover; background-position:center; background-repeat: no-repeat;"
	/>

	<div class="mx-3 mb-1">{post.description}</div>
	<div class="mx-3">{post.content}</div>
</div>
