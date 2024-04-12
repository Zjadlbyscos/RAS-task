function shortestPath(graph, source) {
    const n = Object.keys(graph).length;
    const dp = Array(n).fill(Infinity); // Minimalny koszt dotarcia do każdego miasta
    const visited = Array(n).fill(false); // Lista odwiedzonych miast
    dp[source] = 0; // Koszt miasta startowego wynosi 0
  
    for (let i = 0; i < n - 1; i++) { // Iteruj n-1 razy (odwiedź wszystkie miasta)
      let min = Infinity, minIndex;
      for (let j = 0; j < n; j++) { // Znajdź nieodwiedzone miasto o minimalnym koszcie
        if (!visited[j] && dp[j] < min) {
          min = dp[j];
          minIndex = j;
        }
      }
      visited[minIndex] = true;
  
      for (let neighbor in graph[minIndex]) { // Aktualizuj koszty dla sąsiadów
        neighbor = parseInt(neighbor); // Przekonwertuj klucz string do liczby
        if (!visited[neighbor]) {
          dp[neighbor] = Math.min(dp[neighbor], dp[minIndex] + graph[minIndex][neighbor]);
        }
      }
    }
  
    return dp[n - 1]; // Minimalny koszt dotarcia do wszystkich miast z miasta startowego
  }
  

  const minCost = shortestPath(graph, source);
  console.log("Koszt najkrótszej trasy:", minCost); // Wynik: Koszt najkrótszej trasy: 1945