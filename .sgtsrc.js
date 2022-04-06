
// @ts-check
// Simple-graphql-to-typescript configuration file, see link for more information
// https://sgts.netlify.com/configuration/config.html


/**
 * @type { import("simple-graphql-to-typescript").SgtsConfig }
 */
module.exports = {
    endpoint: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3",
    output: "./src/helpers/Uniswap/UniswapV3Subgraph.ts",
    codegenFunctions: true,
}

