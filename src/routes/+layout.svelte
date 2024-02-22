<nav class="d-flex align-items-center bg-light position-fixed w-100 p-2" style="top:0">
	<a class="btn btn-light text-dark bg-transparent border-0 fw-bold text-uppercase me-4" href="/"
		>Мой блог</a
	>
	<div>
		<a class="btn btn-light text-dark" href="/">Главная</a>
		<a class="btn btn-light text-dark" href="/create">Создать запись</a>
	</div>
</nav>

<div class="container" style="min-height: 90vh; margin-top:5em; margin-bottom:2em;">
	<slot />
</div>

<footer
	class="d-flex align-items-center justify-content-center bg-light p-4"
	style="min-height: 5em"
>
	<i>
		"Если тебе тяжело, значит ты поднимаешься в гору. Если тебе легко, значит ты летишь в пропасть"
		(Генри Форд)
	</i>
</footer>
