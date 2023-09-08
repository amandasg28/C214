<script>
	import Jogador from "./Jogador.svelte";
	import Swal from "sweetalert2";

	let golsTimeA = 0;
	let golsTimeB = 0;

	function marcaGol(time) {
		if (time === "A") {
			golsTimeA += 1;
		} else if (time === "B") {
			golsTimeB += 1;
		}

		console.log(`Gol para o Time ${time}`);
		Swal.fire({
			icon: "success",
			title: "Gol!",
			text: `Gol para o Time ${time}!`,
		});
	}
</script>

<main>
	<h1>Placar do Jogo</h1>
	<div>
		<h2>Time A: {golsTimeA}</h2>
		<button on:click={() => marcaGol("A")}>Marcar Gol para o Time A</button>
	</div>
	<div>
		<h2>Time B: {golsTimeB}</h2>
		<button on:click={() => marcaGol("B")}>Marcar Gol para o Time B</button>
	</div>
</main>
