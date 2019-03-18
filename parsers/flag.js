module.exports = (argv) => {
    const params = argv.slice(2);
    const [operation] = params
        .filter(e => Number.isNaN(Number(e)))
        .map(e => e.startsWith('--') ? e.substring(2) : e)
    const operands = params.filter(e => !Number.isNaN(Number(e))).map(Number);
    return ({
        operation,
        operands
    });
};