<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { Post } from '$lib/models/post';
	import { db } from '$lib/scripts/firebase';
	import { push, ref, set } from 'firebase/database';

	let post = new Post();
</script>

<PageTitle title="Создать запись">
	<button
		class="btn btn-light text-dark"
		on:click={() => {
			push(ref(db, '/posts'), post);
			post = new Post();
		}}>Сохранить</button
	>
</PageTitle>

<div>
	<input class="form-control mb-2" bind:value={post.title} placeholder="Заголовок" />
	<textarea
		class="form-control mb-2"
		bind:value={post.description}
		placeholder="Небольшое описание"
	/>
	<input class="form-control mb-2" bind:value={post.cover} placeholder="Url обложки" />

	{#if post.cover}
		<img class="w-25 mb-2 rounded" src={post.cover} alt="" />
	{/if}

	<input type="date" class="form-control mb-2" bind:value={post.created} />

	<div class="d-flex align-items-center mb-2">
		<input type="checkbox" class="form-check mt-1" bind:checked={post.published} />
		<div class="ms-1">опубликовано</div>
	</div>
	<textarea
		class="form-control mb-2"
		style="min-height: 12em;"
		bind:value={post.content}
		placeholder="Содержимое записи"
	/>
</div>
