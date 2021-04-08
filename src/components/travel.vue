<template>
  <div class="travel">
    <div class="container text-muted travelcontainer">
		<h2 class="traveltitle">Come for the wedding, stay for the beaches...</h2>
		<div class="card-deck travelcarddeck">
			<div class="card text-muted">
				<a class="travelsection" href="#accommodations">
				<div class="card-body text-muted">
					<img class="travelicon"
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IlhNTElEXzExM18iPjxnIGlkPSJYTUxJRF83MzJfIj48cGF0aCBpZD0iWE1MSURfMTIwMl8iIGQ9Im0yMzMuMjYyIDM3MS4wMThjLTE1LjIxMyAwLTI3LjU5IDEyLjM3Ny0yNy41OSAyNy41OXY0MC44MmMwIDE1LjIxMyAxMi4zNzcgMjcuNTkgMjcuNTkgMjcuNTloNDguODJjMTUuMjEzIDAgMjcuNTktMTIuMzc3IDI3LjU5LTI3LjU5di00MC44MmMwLTE1LjIxMy0xMi4zNzctMjcuNTktMjcuNTktMjcuNTl6bTU2LjQxIDI3LjU5djQwLjgyYzAgNC4xODUtMy40MDUgNy41OS03LjU5IDcuNTloLTQ4LjgyYy00LjE4NSAwLTcuNTktMy40MDUtNy41OS03LjU5di00MC44MmMwLTQuMTg1IDMuNDA1LTcuNTkgNy41OS03LjU5aDQ4LjgyYzQuMTg1IDAgNy41OSAzLjQwNSA3LjU5IDcuNTl6IiBmaWxsPSIjNTA2ZTdhIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggaWQ9IlhNTElEXzEyMDZfIiBkPSJtNTAyIDQ5MS4wMThoLTguMjIyYy0uNjczLTU4LjQ5NC03LjI0OS0xMTQuMzAzLTE5LjU5Mi0xNjYuMDI1LTEwLjUzNC00NC4xMzgtMjUuMjY3LTg1LjQ0NS00My43ODktMTIyLjc3Ni02LjEwNC0xMi4zLTEyLjY1NS0yNC4yMTQtMTkuNTA3LTM1LjQ5MiAxLjI0OS0zLjY3OCAxLjkzNy03LjYxMiAxLjkzNy0xMS43MDcgMC02LjU0My0xLjczOS0xMi42ODQtNC43NjctMThoOTMuOTRjMy42ODIgMCA3LjA2NS0yLjAyMiA4LjgwOC01LjI2NiAxLjc0My0zLjI0MiAxLjU2NC03LjE4MS0uNDY3LTEwLjI1MS0xOC40ODQtMjcuOTQ4LTUzLjUxNC00Ni4wMDctODkuMjM5LTQ2LjAwNy00Ljg2MyAwLTkuNzcyLjM3NC0xNC42NjkgMS4wNjFsNTYuODc0LTU2Ljg3NGMyLjYwMy0yLjYwNCAzLjU2NS02LjQyNiAyLjUwNS05Ljk1MXMtMy45NzItNi4xODQtNy41NzktNi45MTljLTMyLjgzLTYuNjg5LTcwLjM2OSA1LjMwNy05NS42MzQgMzAuNTcxLTkuMTgzIDkuMTg0LTE2Ljg0IDIwLjM3OS0yMi4zOTQgMzIuNTUyLTUuNTU4LTEyLjE3Ni0xMy4yMjgtMjMuMzgyLTIyLjM5OS0zMi41NTMtMjUuMjYzLTI1LjI2Mi02Mi43OTktMzcuMjYxLTk1LjYzNC0zMC41Ny0zLjYwNy43MzUtNi41MTkgMy4zOTQtNy41NzkgNi45MTlzLS4wOTggNy4zNDggMi41MDUgOS45NTFsNTYuODQzIDU2Ljg0M2MtNC44NzgtLjY3Ni05Ljc3NC0xLjAzLTE0LjYzNy0xLjAzLTM1LjcyNiAwLTcwLjc1NSAxOC4wNTktODkuMjQgNDYuMDA3LTIuMDMxIDMuMDctMi4yMSA3LjAwOS0uNDY3IDEwLjI1MSAxLjc0MyAzLjI0MyA1LjEyNiA1LjI2NiA4LjgwOCA1LjI2NmgxMTAuNjZjLTIuNTU4IDUuMDMxLTMuOTg4IDEwLjY2MS0zLjk4OCAxNi41IDAgMjAuMTI2IDE2LjM3NCAzNi41IDM2LjUgMzYuNSA4LjU4MSAwIDE2LjQ3My0yLjk4NCAyMi43MTItNy45NTggMzQuMTM0IDQ5LjAyMiA4My4yNDkgMTQ3LjM4MiA4NS4yMDggMzA4Ljk1OGgtNzUuODI1di0zOGMwLTUuNTIyLTQuNDc4LTEwLTEwLTEwcy0xMCA0LjQ3OC0xMCAxMHYzOGgtMTUydi04M2MwLTI5Ljc3NS0yNC4yMjQtNTQtNTQtNTRzLTU0IDI0LjIyNS01NCA1NHY4M2gtMjR2LTE2NmgyODR2MzhjMCA1LjUyMiA0LjQ3OCAxMCAxMCAxMHMxMC00LjQ3OCAxMC0xMHYtMzhoMTguMzI4YzMuNTg4IDAgNi45MDEtMS45MjMgOC42ODItNS4wMzhzMS43NTYtNi45NDYtLjA2NS0xMC4wMzhjLTQxLjI4Ni03MC4wODEtMTA5LjY5OC0xMTkuMDQyLTE4Ny42OTQtMTM0LjMyOC0xLjI3MS0uMjQ4LTIuNTc2LS4yNDgtMy44NDcgMC03Ny45OTYgMTUuMjg2LTE0Ni40MDggNjQuMjQ3LTE4Ny42OTIgMTM0LjMyOC0xLjgyMSAzLjA5Mi0xLjg0NiA2LjkyMy0uMDY2IDEwLjAzOCAxLjc4MSAzLjExNSA1LjA5NCA1LjAzOCA4LjY4MiA1LjAzOGgxOS42NzJ2MTY2aC0xOS42NzJjLTUuNTIzIDAtMTAgNC40NzgtMTAgMTBzNC40NzcgMTAgMTAgMTBoNDkyYzUuNTIyIDAgMTAtNC40NzggMTAtMTBzLTQuNDc4LTEwLTEwLTEwem0tMTQ4LjE4MS0xODZoLTk2LjU0MWMtNi4xNTktMzAuMTQ2LTE3LjMzMy03Mi4wNTktMzUuNjQ1LTEwMS4xIDUzLjIxNCAxOC4wNDYgOTkuNzM1IDUzLjUwNSAxMzIuMTg2IDEwMS4xem0tMTYyLjgxOS0xMDcuMjAxYzE4LjA2MSAxNS42OSAzNC42OTkgNTQuNTM3IDQ1Ljg1NCAxMDcuMjAxaC05MS43MDhjMTEuMTU1LTUyLjY2NCAyNy43OTMtOTEuNTExIDQ1Ljg1NC0xMDcuMjAxem0tMzAuNjM0IDYuMTAxYy0xOC4zMTIgMjkuMDQxLTI5LjQ4NSA3MC45NTQtMzUuNjQ0IDEwMS4xaC05Ni41NDFjMzIuNDUtNDcuNTk1IDc4Ljk3MS04My4wNTMgMTMyLjE4NS0xMDEuMXptLTY2LjY5NCAyODcuMXYtODNjMC0xOC43NDggMTUuMjUyLTM0IDM0LTM0czM0IDE1LjI1MiAzNCAzNHY4M3ptMjI2LjU0Ni0zNzkuMDI0YzAtOS4wOTggNy40MDItMTYuNSAxNi41LTE2LjVzMTYuNSA3LjQwMiAxNi41IDE2LjUtNy40MDIgMTYuNS0xNi41IDE2LjUtMTYuNS03LjQwMi0xNi41LTE2LjV6bTM5LjYwOSA0My4wMjRjMC05LjA5OCA3LjQwMi0xNi41IDE2LjUtMTYuNXMxNi41IDcuNDAyIDE2LjUgMTYuNS03LjQwMiAxNi41LTE2LjUgMTYuNS0xNi41LTcuNDAyLTE2LjUtMTYuNXptNjEuMjc1LTU5LjUyNGMyMS4zNTYgMCA0Mi45MzkgOC4yMTUgNTguNjM0IDIxLjUyM2gtMTA2Ljg3MmMuMjI3LTEuNjQ0LjM1NC0zLjMxOC4zNTQtNS4wMjMgMC0uNzI0LS4wMjctMS40NDItLjA2OS0yLjE1NmwxLjQ2Mi0xLjQ2MmMxNC4wMi04LjI0IDMwLjU2NC0xMi44ODIgNDYuNDkxLTEyLjg4MnptLTQ0LjM2MS00Ny45N2MxNS4xMDItMTUuMTAyIDM2LjE3Mi0yNC41NTQgNTYuNjgtMjYuMjQxbC02OC4wOTEgNjguMDljLTIuNjgyLTMuMzg1LTUuOTQ1LTYuMjkxLTkuNjQ2LTguNTUxIDQuNjEzLTEyLjU0OSAxMS45MTUtMjQuMTU3IDIxLjA1Ny0zMy4yOTh6bS03My4wNzggMGM4LjQyNCA4LjQyNCAxNS4zIDE4Ljk3NyAxOS45MzkgMzAuNDE4LTQuNTc2IDEuNzY5LTguNzA3IDQuNDMyLTEyLjE4MSA3Ljc3OGwtNjQuNDM3LTY0LjQzN2MyMC41MDggMS42ODcgNDEuNTc5IDExLjEzOSA1Ni42NzkgMjYuMjQxem0tNDQuMzU5IDQ3Ljk3YzE0LjA5NyAwIDI4LjU2NiAzLjU3MiA0MS40ODEgMTAuMTM2LS4zNjUgMi4wNjgtLjU2NyA0LjE5Mi0uNTY3IDYuMzY0IDAgMS43MDUuMTI3IDMuMzguMzU0IDUuMDIzaC05OS45MDJjMTUuNjk0LTEzLjMwOCAzNy4yNzgtMjEuNTIzIDU4LjYzNC0yMS41MjN6bTYyLjI3MyA3NC41MjRjLTkuMDk4IDAtMTYuNS03LjQwMi0xNi41LTE2LjUgMC01LjcwMyAyLjk4MS0xMC45ODEgNy43MzctMTMuOTc2IDYuNDEgNS41NjkgMTQuNzY3IDguOTUyIDIzLjkwNCA4Ljk1Mi4xOTMgMCAuMzgzLS4wMTIuNTc1LS4wMTUuNTE1IDEuNjExLjc4NCAzLjMwMy43ODQgNS4wMzggMCA5LjA5OS03LjQwMiAxNi41MDEtMTYuNSAxNi41MDF6bTEyNy45MjcgMzIxYy0uOTQxLTc4LjMzMi0xMi45NjEtMTUwLjQ5OC0zNS43NjUtMjE0LjYzMS0xMi41MzMtMzUuMjQ4LTI2LjY5Mi02My4zOTctMzkuNjI3LTg0Ljk0Mi43MzMuMDQ0IDEuNDcxLjA3MyAyLjIxNS4wNzMgOC4xNDEgMCAxNS42NjctMi42ODEgMjEuNzQ1LTcuMjA0IDUuMDE1IDguNjI1IDkuODQzIDE3LjU5IDE0LjQwOSAyNi43OTIgMTcuODUzIDM1Ljk3OSAzMi4wNjcgNzUuODU4IDQyLjI1MiAxMTguNTI5IDExLjk4MSA1MC4yMTIgMTguMzgzIDEwNC40NTYgMTkuMDUzIDE2MS4zODN6IiBmaWxsPSIjNTA2ZTdhIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggaWQ9IlhNTElEXzEyMjNfIiBkPSJtMzQzLjY3IDM5OC4wMjFjLTIuNjMgMC01LjIxIDEuMDYxLTcuMDcgMi45Mi0xLjg1OSAxLjg3LTIuOTMgNC40NS0yLjkzIDcuMDhzMS4wNyA1LjIgMi45MyA3LjA3YzEuODYgMS44NiA0LjQ0IDIuOTMgNy4wNyAyLjkzIDIuNjQgMCA1LjIxLTEuMDY5IDcuMDctMi45MyAxLjg1OS0xLjg3IDIuOTMtNC40NCAyLjkzLTcuMDdzLTEuMDctNS4yMS0yLjkzLTcuMDhjLTEuODYtMS44Ni00LjQzLTIuOTItNy4wNy0yLjkyeiIgZmlsbD0iIzUwNmU3YSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==" />
					<h5 class="card-title">Accommodations</h5>
					<img class="arrow" 
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1MS44NDcgNDUxLjg0NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBkPSJNMjI1LjkyMywzNTQuNzA2Yy04LjA5OCwwLTE2LjE5NS0zLjA5Mi0yMi4zNjktOS4yNjNMOS4yNywxNTEuMTU3Yy0xMi4zNTktMTIuMzU5LTEyLjM1OS0zMi4zOTcsMC00NC43NTEgICBjMTIuMzU0LTEyLjM1NCwzMi4zODgtMTIuMzU0LDQ0Ljc0OCwwbDE3MS45MDUsMTcxLjkxNWwxNzEuOTA2LTE3MS45MDljMTIuMzU5LTEyLjM1NCwzMi4zOTEtMTIuMzU0LDQ0Ljc0NCwwICAgYzEyLjM2NSwxMi4zNTQsMTIuMzY1LDMyLjM5MiwwLDQ0Ljc1MUwyNDguMjkyLDM0NS40NDlDMjQyLjExNSwzNTEuNjIxLDIzNC4wMTgsMzU0LjcwNiwyMjUuOTIzLDM1NC43MDZ6IiBmaWxsPSIjNTA2ZTdhIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
				</div>
				</a>
			</div>
			<div class="card text-muted">
				<a class="travelsection" href="#activities">
				<div class="card-body text-muted">
					<img class="travelicon"
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJfMTFfY29weSIgZGF0YS1uYW1lPSIxMSBjb3B5Ij48Zz48cGF0aCBkPSJtMjQgMzEuOTVhNjEuOTEyIDYxLjkxMiAwIDAgMCAtNC4xNzUtMjEuOS45ODkuOTg5IDAgMCAwIC0uMDU2LS4yYy0xLjQ1MS0zLjY2MS00LjQ4OS05Ljg1LTYuNzA0LTkuODUtMi43MSAwLTYuMjcyIDguNzcxLTYuNjY1IDkuNzcxYTEuMDY3IDEuMDY3IDAgMCAwIC0uMDU2LjIgNjEuOTE5IDYxLjkxOSAwIDAgMCAtNC4yIDIxLjk3N2MtLjAwOSAxNS43OSAzLjI1NiAyNi4wNTIgNy4xNDMgMzAuMDUyaC05LjI4N3YyaDY0di0yaC00Ny4xNTdjMy44OTMtNCA3LjE1Ny0xNC4yNjIgNy4xNTctMzAuMDV6bS0xOS40MzktNi44MTNhMTIuNTMgMTIuNTMgMCAwIDEgOC40MzktMy4yMiAxMi44NTEgMTIuODUxIDAgMCAxIDIuNzM5LjI5NGwuNDI4LTEuOTUzYTE0Ljc3NiAxNC43NzYgMCAwIDAgLTMuMTY3LS4zNDEgMTQuNTY4IDE0LjU2OCAwIDAgMCAtOC4wMTYgMi4zNzRjLjI1LTEuNDQ0LjU0Ni0yLjg0Ljg3Ni00LjE3N2ExMi43IDEyLjcgMCAwIDEgMTQuNDM3LjEwOWMuMzI2IDEuMzM0LjYyIDIuNzI3Ljg2NyA0LjE2N2ExNC40IDE0LjQgMCAwIDAgLTIuNzkyLTEuNDYybC0uNzMgMS44NjFhMTIuMzQgMTIuMzQgMCAwIDEgMy45NDQgMi40ODMgNTUuNjQ5IDU1LjY0OSAwIDAgMSAuNDE0IDYuNjc4IDg3LjUzNCA4Ny41MzQgMCAwIDEgLS45IDEyLjc3OSAxMS41IDExLjUgMCAwIDEgLTguMTA2IDMuMjQgMTEuNTU5IDExLjU1OSAwIDAgMSAtNy45MzktMy4wNzcgODcuMzA3IDg3LjMwNyAwIDAgMSAtLjkyLTEyLjk0MiA1NS43NDcgNTUuNzQ3IDAgMCAxIC40MjYtNi44MTN6bTguNS0yMy4wNzRhMTUuNDgxIDE1LjQ4MSAwIDAgMSAzLjAyNCA0LjQ4M2MuMy41OS42IDEuMjMxLjkwOCAxLjkxOGExNC44ODEgMTQuODgxIDAgMCAwIC03Ljg0NS0uMDQxcS40MzEtLjk2NC44NTItMS44YTE1LjcgMTUuNyAwIDAgMSAzLjA2NS00LjU2em0tNC45MyA4LjgxOGExMi44MzcgMTIuODM3IDAgMCAxIDkuODk0LjA2NmMuNTMgMS4zNzggMS4wNDcgMi44ODUgMS41MjQgNC41YTE0Ljc3MiAxNC43NzIgMCAwIDAgLTEyLjk0OS0uMDczYy40ODEtMS42MTMgMS0zLjExOCAxLjUzMS00LjQ5M3ptNC44NjMgMzkuMDg4YTEzLjc0OSAxMy43NDkgMCAwIDAgNy41OTUtMi4yNTdxLS4xODEuOTMtLjM4MSAxLjgwOGExMS42MTUgMTEuNjE1IDAgMCAxIC03LjIxNCAyLjQ0OSAxMS42NjkgMTEuNjY5IDAgMCAxIC03LjA0LTIuMzEzcS0uMjA1LS44OTItLjM5Mi0xLjgzOGExMy44IDEzLjggMCAwIDAgNy40MzIgMi4xNTF6bTAgNGExMy44MjYgMTMuODI2IDAgMCAwIDYuNDc3LTEuNTkxYy0xLjc0MiA1Ljk5Mi00LjE0MyA5LjUyMi02LjQwNiA5LjUyMnMtNC42NC0zLjUtNi4zOC05LjQzNWExMy44NzIgMTMuODcyIDAgMCAwIDYuMzA5IDEuNTA0eiIgZmlsbD0iIzUwNmU3YSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xMi4wODUgNTUuOTM0aDJ2MmgtMnoiIGZpbGw9IiM1MDZlN2EiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMTIuMDg1IDI1LjkzNGgydjRoLTJ6IiBmaWxsPSIjNTA2ZTdhIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTEzLjA4NSAzNi4zNDggMi4yOTMgMi4yOTMgMS40MTQtMS40MTQtMy0zYTEgMSAwIDAgMCAtMS40MTQgMGwtMyAzIDEuNDE0IDEuNDE0eiIgZmlsbD0iIzUwNmU3YSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xMi4zNzggMzkuMjI3LTMgMyAxLjQxNCAxLjQxNCAyLjI5My0yLjI5MyAyLjI5MyAyLjI5MyAxLjQxNC0xLjQxNC0zLTNhMSAxIDAgMCAwIC0xLjQxNCAweiIgZmlsbD0iIzUwNmU3YSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zMS4xNTYgNTEuMzYzaC4wNDRhNy45MTcgNy45MTcgMCAwIDAgNC42MDktMS4zOTEgNS45ODcgNS45ODcgMCAwIDEgMy41ODEtMS4xaC4wMzdhNS45NzIgNS45NzIgMCAwIDEgMy41NTEgMS4wNzMgNy45MTMgNy45MTMgMCAwIDAgNC41NzUgMS4zNTVoLjA0N2E3LjkyMyA3LjkyMyAwIDAgMCA0LjYxLTEuMzkxIDUuOTg3IDUuOTg3IDAgMCAxIDMuNTgzLTEuMWguMDM4YTUuOTgyIDUuOTgyIDAgMCAxIDMuNTU0IDEuMDczIDcuOTE4IDcuOTE4IDAgMCAwIDQuNTc2IDEuMzUzaC4wMzlsLS4wMDgtMmgtLjAzOGE1Ljk4NCA1Ljk4NCAwIDAgMSAtMy41NTQtMS4wNzggNy45MTggNy45MTggMCAwIDAgLTQuNTcyLTEuMzU3aC0uMDQ1YTcuOTI4IDcuOTI4IDAgMCAwIC00LjYxIDEuMzkgNS45ODcgNS45ODcgMCAwIDEgLTMuNTgzIDEuMWgtLjAzN2E1Ljk3OCA1Ljk3OCAwIDAgMSAtMy41NTMtMS4wNjYgNy45MDcgNy45MDcgMCAwIDAgLTQuNTczLTEuMzU0aC0uMDQ1YTcuOTE2IDcuOTE2IDAgMCAwIC00LjYwOSAxLjM5MiA1Ljk4NyA1Ljk4NyAwIDAgMSAtMy41ODEgMS4xaC0uMDM4YTUuOTg0IDUuOTg0IDAgMCAxIC0zLjU1NC0xLjA3MSA4LjkxOCA4LjkxOCAwIDAgMCAtMi40LTEuMDkxbC0uNTA5IDEuOTM0YTcuMDA1IDcuMDA1IDAgMCAxIDEuODk0Ljg4IDcuOTA3IDcuOTA3IDAgMCAwIDQuNTcxIDEuMzQ5eiIgZmlsbD0iIzUwNmU3YSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zMi45OTMgNTUuNGE0LjM1MyA0LjM1MyAwIDAgMCAtMi41MTUuNzQzIDIuNjQzIDIuNjQzIDAgMCAxIC0yLjk3MSAwIDQuMzQ1IDQuMzQ1IDAgMCAwIC0yLjUwNy0uNzQzdjJhMi40MDYgMi40MDYgMCAwIDEgMS40ODMuNDU3IDQuNjI1IDQuNjI1IDAgMCAwIDUuMDI4IDAgMi42NDggMi42NDggMCAwIDEgMi45NzQgMCA0LjM1OSA0LjM1OSAwIDAgMCAyLjUxNS43NDN2LTJhMi40MTggMi40MTggMCAwIDEgLTEuNDg3LS40NTcgNC4zNTYgNC4zNTYgMCAwIDAgLTIuNTItLjc0M3oiIGZpbGw9IiM1MDZlN2EiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNTUuOTkzIDU1LjRhNC4zNTMgNC4zNTMgMCAwIDAgLTIuNTE1Ljc0MyAyLjY0MyAyLjY0MyAwIDAgMSAtMi45NzEgMCA0LjM0NSA0LjM0NSAwIDAgMCAtMi41MDctLjc0M3YyYTIuNDA2IDIuNDA2IDAgMCAxIDEuNDgzLjQ1NyA0LjYyNSA0LjYyNSAwIDAgMCA1LjAyOCAwIDIuNjQ4IDIuNjQ4IDAgMCAxIDIuOTc0IDAgNC4zNTkgNC4zNTkgMCAwIDAgMi41MTUuNzQzdi0yYTIuNDE4IDIuNDE4IDAgMCAxIC0xLjQ4Ny0uNDU3IDQuMzU2IDQuMzU2IDAgMCAwIC0yLjUyLS43NDN6IiBmaWxsPSIjNTA2ZTdhIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTUwIDIxYTcgNyAwIDEgMCAtNy03IDcuMDA4IDcuMDA4IDAgMCAwIDcgN3ptMC0xMmE1IDUgMCAxIDEgLTUgNSA1LjAwNiA1LjAwNiAwIDAgMSA1LTV6IiBmaWxsPSIjNTA2ZTdhIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTQ4Ljk5NSAyaDJ2M2gtMnoiIGZpbGw9IiM1MDZlN2EiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNDguOTk1IDIzaDJ2M2gtMnoiIGZpbGw9IiM1MDZlN2EiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNDEuNTcgNS4wNzVoMnYzaC0yeiIgdHJhbnNmb3JtPSJtYXRyaXgoLjcwNyAtLjcwNyAuNzA3IC43MDcgNy44MTkgMzIuMDI4KSIgZmlsbD0iIzUwNmU3YSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im01Ni40MiAxOS45MjVoMnYzaC0yeiIgdHJhbnNmb3JtPSJtYXRyaXgoLjcwNyAtLjcwNyAuNzA3IC43MDcgMS42NzEgNDYuODgzKSIgZmlsbD0iIzUwNmU3YSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im01NS45MiA1LjU3NWgzdjJoLTN6IiB0cmFuc2Zvcm09Im1hdHJpeCguNzA3IC0uNzA3IC43MDcgLjcwNyAxMi4xNjggNDIuNTI4KSIgZmlsbD0iIzUwNmU3YSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im00MS4wNyAyMC40MjVoM3YyaC0zeiIgdHJhbnNmb3JtPSJtYXRyaXgoLjcwNyAtLjcwNyAuNzA3IC43MDcgLTIuNjgxIDM2LjM3NykiIGZpbGw9IiM1MDZlN2EiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNTguOTk1IDEzaDN2MmgtM3oiIGZpbGw9IiM1MDZlN2EiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzcuOTk1IDEzaDN2MmgtM3oiIGZpbGw9IiM1MDZlN2EiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=" />
					<h5 class="card-title">Activities</h5>
					<img class="arrow" 
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1MS44NDcgNDUxLjg0NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBkPSJNMjI1LjkyMywzNTQuNzA2Yy04LjA5OCwwLTE2LjE5NS0zLjA5Mi0yMi4zNjktOS4yNjNMOS4yNywxNTEuMTU3Yy0xMi4zNTktMTIuMzU5LTEyLjM1OS0zMi4zOTcsMC00NC43NTEgICBjMTIuMzU0LTEyLjM1NCwzMi4zODgtMTIuMzU0LDQ0Ljc0OCwwbDE3MS45MDUsMTcxLjkxNWwxNzEuOTA2LTE3MS45MDljMTIuMzU5LTEyLjM1NCwzMi4zOTEtMTIuMzU0LDQ0Ljc0NCwwICAgYzEyLjM2NSwxMi4zNTQsMTIuMzY1LDMyLjM5MiwwLDQ0Ljc1MUwyNDguMjkyLDM0NS40NDlDMjQyLjExNSwzNTEuNjIxLDIzNC4wMTgsMzU0LjcwNiwyMjUuOTIzLDM1NC43MDZ6IiBmaWxsPSIjNTA2ZTdhIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
				</div>
				</a>
			</div>
		</div>
		<div class="accommodations" id="accommodations">
			<h2>Accommodations</h2>
			<p>We contacted multiple hotels in the Lahaina/Ka'anapali area for room blocks, but unfortunately, they are 
				not able to offer our guests any significant discounts. The quotes we received were around $300/room per 
				night. With resort fees, tax, etc. that averages around $200 per person per night. Therefore, we recommend 
				that our guests find a reasonably priced Airbnb or hotel that's relatively close to our venue in Olowalu. 
				Below are a few options that we recommend in Lahaina and Ka'anapali. If you're on a budget, you can find 
				cheaper places to stay in Kihei, about 20-30 minute drive from Olowalu/Lahaina.</p>
			<h3>Lahaina</h3>
			<dl class="accommodationlist">
				<dt>Puamana resort</dt>
				<dd>• Gated condo resort, that has separate town homes and lots of common area with grassy areas, pool, 
					etc. The price ranges depend on the individual owners and their level of upgrades done to their 
					condo. This property is 5 minutes away from Olowalu.</dd>
				<dd>• Website: <a class="travellink" href="http://www.aperfectvacationrental.com">http://www.aperfectvacationrental.com</a></dd>
				<br>
				<dt>Aina Nalu resort</dt>
				<dd>• A lower end condo option, that is more like a hotel resort. This property is 10 minutes away from Olowalu.</dd>
				<dd>• Website: <a class="travellink" href="http://www.outriggerainanalucondo.com/">http://www.outriggerainanalucondo.com/</a></dd>
				<br>
				<dt>Lahaina Shores Beach Resort</dt>
				<dd>• Another option for a reasonable 'ocean front' Hotel</dd>
				<dd>• Website: <a class="travellink" href="http://www.lahainashores.com/">http://www.lahainashores.com/</a></dd>
			</dl>
			<h3>Ka'anapali</h3>
			<dl class="accommodationlist">
				<dd><b>Hyatt Regency:</b> 
					<a class="travellink"  href="https://www.hyatt.com/en-US/hotel/hawaii/hyatt-regency-maui-resort-andspa/oggrm"> 
					https://www.hyatt.com/en-US/hotel/hawaii/hyatt-regency-maui-resort-andspa/oggrm
					</a>
				</dd>
				<dd><b>Westin Maui resort and spa:</b> 
				<a class="travellink" href="https://www.marriott.com/hotels/travel/hnmwi-the-westin-mauiresort-and-spa-kaanapali/"> 
					https://www.marriott.com/hotels/travel/hnmwi-the-westin-mauiresort-and-spa-kaanapali/
					</a>
				</dd>
				<dd><b>Marriott Maui Ocean Club:</b> 
					<a class="travellink" href="https://www.marriott.com/hotels/travel/hnmmh-marriotts-mauiocean-club-molokai-maui-and-lanai-towers/"> 
					https://www.marriott.com/hotels/travel/hnmmh-marriotts-mauiocean-club-molokai-maui-and-lanai-towers/
					</a>
				</dd>
				<dd><b>Sheraton Maui Resort:</b> 
					<a class="travellink" href="https://www.marriott.com/hotels/travel/hnmsi-sheraton-maui-resort-andspa/"> 
					https://www.marriott.com/hotels/travel/hnmsi-sheraton-maui-resort-andspa/
					</a>
				</dd>
			</dl>
		</div>
		<br><br><br><br><br>
		<div class="activities" id="activities">
			<h2>Activities</h2>
			<h3>Tours, Hiking, and Sights</h3>
			<dl class="thingstodo">
				<dt>Kapalua coastal trail</dt>
				<dd>• 2ish miles along the beach, paved trail</dd>
				<dd>• <a class="travellink" href="https://www.yelp.com/biz/kapalua-coastal-trail-lahaina">
				https://www.yelp.com/biz/kapalua-coastal-trail-lahaina</a></dd>
				<br>
				<dt>Hana</dt>
				<dd>• black sand beaches</dd>
				<dd>• Hana tube - tour of caves, red ti botanical maze, $12</dd>
				<dd>• <a class="travellink" href="http://www.mauicave.com/">
				http://www.mauicave.com/</a></dd>
				<br>
				<dt>Wai'anapanapa state park</dt>
				<dd>• huge park (120 acres) with panoramic view of black sand beach and green jungle</dd>
				<dd>• ocean caves, cliff diving, fresh water pools, hiking trails, etc.</dd>
				<dd>• <a class="travellink" href="http://dlnr.hawaii.gov/dsp/parks/maui/waianapanapa-state-park/">
				http://dlnr.hawaii.gov/dsp/parks/maui/waianapanapa-state-park/</a></dd>
				<br>
				<dt>Lahaina</dt>
				<dd>• Front street - restaurants, markets, and artwork</dd>
				<dd>• Banyan court - nice park next to beach with beautiful banyan tree</dd>
				<br>
				<dt>Molokini</dt>
				<dd>• Snorkeling or scuba diving off a boat</dd>
				<dd>• Maui Snorkel Tours, $109<a class="travellink" href="https://mauisnorkeltours.com/tours/">
				https://mauisnorkeltours.com/tours/</a></dd>
				<dd>• Aqua Adventures, $115<a class="travellink" href="https://www.mauisnorkelsnuba.com/">
				https://www.mauisnorkelsnuba.com/</a></dd>
				<dd>• Molokini Snorkel Charters, $116<a class="travellink" href="https://mauisnorkelcharters.com/molokini-snorkel-tours/">
				https://mauisnorkelcharters.com/molokini-snorkel-tours/</a></dd>
				<br>
				<dt>Punakea palms farm</dt>
				<dd>• coconut farm + tasting, $49</dd>
				<dd>• <a class="travellink" href="https://www.punakeapalms.com/">https://www.punakeapalms.com/</a></dd>
				<br>
			</dl>
			<h3>Beaches</h3>
			<dl class="beaches">
				<dt>Ka'anapali beach</dt>
				<dd>• most beautiful beach on the island</dd>
				<br>
				<dt>Honolua bay</dt>
				<dd>• good for snorkeling and surfing</dd>
				<br>
				<dt>White rock (Palauea)</dt>
				<dd>• nice spot for snorkeling and diving</dd>
				<br>
				<dt>Cove park</dt>
				<dd>• best for beginning surfing, lots of surf shops with rentals across the street</dd>
				<br>
				<dt>Kapalua bay</dt>
				<dd>• stop by to see some turtles</dd>
				<br>
				<dt>Ho'okipa</dt>
				<dd>• experienced surfers only</dd>
				<br>
				<dt>Big beach in Makena</dt>
				<dd>• waters are usually calm, good if you just want to chill and swim</dd>
				<br>
			</dl>
			<h3>Food</h3>
			<dl class="food">
				<dt>Mama's fish house</dt>
				<dd>• very fancy seafood, very pricey but has amazing food and cocktails. Book reservation around time of sunset!, 
					has amazing views, need to book 2 months in advance</dd>
				<br>
				<dt>Tin roof Maui</dt>
				<dd>• Hawaiian comfort food (not that fancy, but good food!)</dd>
				<br>
				<dt>Da kitchen café</dt>
				<dd>• Hawaiian food, great lunch spot, huge portions</dd>
				<br>
				<dt>Takamiya market</dt>
				<dd>• good grab-and-go Hawaiian food, poke, spam musubis, bento plates</dd>
				<br>
				<dt>Komoda's bakery</dt>
				<dd>• best bakery on the island. Good guava + lilikoi malasadas and cream puffs</dd>
				<br>
				<dt>Guri guri</dt>
				<dd>• sorbet. Call before heading over because hours are not accurate online</dd>
				<br>
				<dt>Poke hale grindz</dt>
				<dd>• great poke</dd>
				<br>
				<dt>Restaurants with nice views</dt>
				<dd>• Mama's fish house, Kimo's, Koa 156, the mill house</dd>
				<br>
				<dt>Pukalani Foodland</dt>
				<dd>• best poke on the island</dd>
				<dd>• Don't go to any other Foodland for poke; it's not the same!</dd>
				<br>
			</dl>
			<h3>Nightlife</h3>
			<dl class="nightlife">
				<dd>Kahale's</dd>
				<dd>What Ales You</dd>
				<dd>Vibe Bar</dd>
				<dd>South Shore Tiki Lounge</dd>
				<dd>Kimo's</dd>
				<dd>Fleetwood's</dd>
			</dl>
			<h3>Luaus</h3>
			<dl class="luaus">
				<dd>Check <a class="travellink" href="https://www.hawaiidiscount.com/maui/luaus.htm">https://www.hawaiidiscount.com/maui/luaus.htm</a> for discounts</dd>
				<dd>Old lahaina lu'au, $125 <a class="travellink" href="https://www.oldlahainaluau.com/">https://www.oldlahainaluau.com/</a>.</dd>
				<dd>Details: dinner and drinks provided, imu ceremony.</dd>
				<dd>Entertainment: hula, tahitian, fire dancers.</dd>
			</dl>
		</div>
    </div>
	<footer class="footer">
      <div class="container">
        <span class="text-muted">&#169;2021. Designed and coded by Chastity Savella.</span>
      </div>
    </footer>
  </div>
</template>

<style>
.traveltitle {
	padding-top: 3em;
	color: white;
	font-size: 3em;
}
.travelcarddeck {
	padding-top: 15em;
	padding-bottom: 10em;
}

.travelcontainer {
	padding-bottom: 5em;
}

.travellink {
	color: #665566;
}

.travellink:hover {
	color: darkgrey;
}
.accommodationlist, .thingstodo, .beaches, .food, .nightlife, .luaus{
	text-align: left;
	list-style-type: circle;
}
.travelicon {
  height: 5em;
  width: 5em;
  padding: 1em;
}

.arrow {
	height: 2em;
	width: 2em;
}

.travelsection:hover {
	text-decoration: none;
}

</style>