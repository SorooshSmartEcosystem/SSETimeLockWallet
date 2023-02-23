const SSETokenTimeLock = artifacts.require("SSETokenTimeLock");

module.exports = function (deployer) {
  deployer.deploy(SSETokenTimeLock);
};
