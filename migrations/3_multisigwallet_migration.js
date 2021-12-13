const MultiSigWallet = artifacts.require("MultiSigWallet");

module.exports = function (deployer) {
  // specify arguments for contract deployment
  let approvers = [], requiredApprovals = 0;
  deployer.deploy(MultiSigWallet, approvers, requiredApprovals);
};
