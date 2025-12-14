const start = performance.now();
for (let i = 0; i < 1e4; i++) {
}
console.log('test5 loop ms', (performance.now() - start).toFixed(2));
