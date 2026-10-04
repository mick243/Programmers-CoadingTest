function solution(cost, hint) {
    const len = cost.length;
    let ans = Infinity;

    const limit = 1 << (len - 1);

    for (let bit = 0; bit < limit; bit++) {
        let sum = 0;
        const cnt = new Array(len + 1).fill(0);

        for (let i = 0; i < len - 1; i++) {
            if (bit & (1 << i)) {
                const h = hint[i];
                sum += h[0];

                for (let j = 1; j < h.length; j++) {
                    cnt[h[j]]++;
                }
            }
        }

        for (let i = 0; i < len; i++) {
            const k = Math.min(cnt[i + 1], len - 1);
            sum += cost[i][k];
        }

        if (sum < ans) ans = sum;
    }

    return ans;
}
