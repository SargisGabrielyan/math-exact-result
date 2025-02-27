function numberCompiler(number) {
    const num = parseFloat(number.toString());

    if (Number(num) === num && num % 1 === 0) {
        return { value: num, decimals: 0 };
    } else {
        const numStr = num.toString();
        const numLength = numStr.length;
        const dotPosition = numStr.indexOf('.');
        const decimals = numLength - 1 - dotPosition;
        const value = Number(numStr.replace('.', ''));

        return { value: value, decimals: decimals };
    }
}

export const add = (...numbers) => {
    if (numbers.length === 1) {
        return numbers[0];
    }

    return numbers.reduce((result, current, index) => {
        if (index === 0) {
            return current;
        }

        const compiledResult = numberCompiler(result);
        const compiledCurrent = numberCompiler(current);
        const decimals = compiledResult.decimals + compiledCurrent.decimals;

        if (decimals) {
            if (compiledResult.decimals && !compiledCurrent.decimals) {
                const mulValue = Math.pow(10, compiledResult.decimals);
                const divValue = mulValue;
                const compiledCurrentValue = compiledCurrent.value * mulValue;

                return (compiledResult.value + compiledCurrentValue) / divValue;
            } else if (!compiledResult.decimals && compiledCurrent.decimals) {
                const mulValue = Math.pow(10, compiledCurrent.decimals);
                const divValue = mulValue;
                const compiledResultValue = compiledResult.value * mulValue;

                return (compiledResultValue + compiledCurrent.value) / divValue;
            } else {
                if (compiledResult.decimals > compiledCurrent.decimals) {
                    const mulValue = Math.pow(
                        10,
                        compiledResult.decimals - compiledCurrent.decimals
                    );

                    const divValue = Math.pow(10, compiledResult.decimals);
                    const compiledCurrentValue = compiledCurrent.value * mulValue;

                    return (compiledResult.value + compiledCurrentValue) / divValue;
                } else if (compiledResult.decimals < compiledCurrent.decimals) {
                    const mulValue = Math.pow(
                        10,
                        compiledCurrent.decimals - compiledResult.decimals
                    );

                    const divValue = Math.pow(10, compiledCurrent.decimals);
                    const compiledResultValue = compiledResult.value * mulValue;

                    return (compiledResultValue + compiledCurrent.value) / divValue;
                } else {
                    const divisionValue = Math.pow(10, decimals / 2);

                    return (compiledResult.value + compiledCurrent.value) / divisionValue;
                }
            }
        } else {
            return compiledResult.value + compiledCurrent.value;
        }
    }, 0);
};

export const subtract = (...numbers) => {
    if (numbers.length === 1) {
        return numbers[0];
    }

    return numbers.reduce((result, current, index) => {
        if (index === 0) {
            return current;
        }

        const compiledResult = numberCompiler(result);
        const compiledCurrent = numberCompiler(current);
        const decimals = compiledResult.decimals + compiledCurrent.decimals;

        if (decimals) {
            if (compiledResult.decimals && !compiledCurrent.decimals) {
                const mulValue = Math.pow(10, compiledResult.decimals);
                const divValue = mulValue;
                const compiledCurrentValue = compiledCurrent.value * mulValue;

                return (compiledResult.value - compiledCurrentValue) / divValue;
            } else if (!compiledResult.decimals && compiledCurrent.decimals) {
                const mulValue = Math.pow(10, compiledCurrent.decimals);
                const divValue = mulValue;
                const compiledResultValue = compiledResult.value * mulValue;

                return (compiledResultValue - compiledCurrent.value) / divValue;
            } else {
                if (compiledResult.decimals > compiledCurrent.decimals) {
                    const mulValue = Math.pow(
                        10,
                        compiledResult.decimals - compiledCurrent.decimals
                    );

                    const divValue = Math.pow(10, compiledResult.decimals);
                    const compiledCurrentValue = compiledCurrent.value * mulValue;

                    return (compiledResult.value - compiledCurrentValue) / divValue;
                } else if (compiledResult.decimals < compiledCurrent.decimals) {
                    const mulValue = Math.pow(
                        10,
                        compiledCurrent.decimals - compiledResult.decimals
                    );

                    const divValue = Math.pow(10, compiledCurrent.decimals);
                    const compiledResultValue = compiledResult.value * mulValue;

                    return (compiledResultValue - compiledCurrent.value) / divValue;
                } else {
                    const divisionValue = Math.pow(10, decimals / 2);

                    return (compiledResult.value - compiledCurrent.value) / divisionValue;
                }
            }
        } else {
            return compiledResult.value - compiledCurrent.value;
        }
    }, 0);
};

export const multiply = (...numbers) => {
    if (numbers.length === 1) {
        return numbers[0];
    }

    if (numbers.includes(0)) {
        return 0;
    }

    return numbers.reduce((result, current) => {
        const compiledResult = numberCompiler(result);
        const compiledCurrent = numberCompiler(current);
        const decimals = compiledResult.decimals + compiledCurrent.decimals;

        if (decimals) {
            const divisionValue = Math.pow(10, decimals);

            return (compiledResult.value * compiledCurrent.value) / divisionValue;
        } else {
            return compiledResult.value * compiledCurrent.value;
        }
    }, 1);
};

export const divide = (...numbers) => {
    if (numbers.length === 1) {
        return numbers[0];
    }

    if (numbers.includes(0)) {
        return 0;
    }

    return numbers.reduce((result, current, index) => {
        if (index === 0) {
            return current;
        }

        const compiledResult = numberCompiler(result);
        const compiledCurrent = numberCompiler(current);
        let decimals = 0;

        if (compiledResult.decimals && compiledCurrent.decimals) {
            decimals =
                compiledResult.decimals === compiledCurrent.decimals
                    ? 0
                    : compiledResult.decimals > compiledCurrent.decimals
                        ? compiledResult.decimals - compiledCurrent.decimals
                        : compiledCurrent.decimals - compiledResult.decimals;
        } else {
            decimals = compiledResult.decimals + compiledCurrent.decimals;
        }

        if (decimals) {
            const divisionValue = Math.pow(10, decimals);

            let result = compiledResult.value / compiledCurrent.value;

            const newCompiledResult = numberCompiler(result);
            const newCompiledResultDecimals = newCompiledResult.decimals
                ? Math.pow(10, newCompiledResult.decimals)
                : 0;

            if (compiledResult.decimals > compiledCurrent.decimals) {
                if (newCompiledResultDecimals) {
                    result =
                        newCompiledResult.value /
                        (newCompiledResultDecimals * divisionValue);
                } else {
                    result = result / divisionValue;
                }
            }

            if (compiledResult.decimals < compiledCurrent.decimals) {
                if (newCompiledResultDecimals) {
                    if (newCompiledResultDecimals > divisionValue) {
                        result =
                            newCompiledResult.value /
                            (newCompiledResultDecimals / divisionValue);
                    } else if (newCompiledResultDecimals < divisionValue) {
                        result =
                            newCompiledResult.value *
                            (divisionValue / newCompiledResultDecimals);
                    } else {
                        result = newCompiledResult.value;
                    }
                } else {
                    result = result * divisionValue;
                }
            }

            return result;
        } else {
            return compiledResult.value / compiledCurrent.value;
        }
    }, 1);
};
