var _this;

var ecc_config = {
    address_prefix: "GLS"
};

module.exports = _this = {
    core_asset: "GOLOS",
    vest_asset: "GESTS",
    dollar_asset: "GBG",
    address_prefix: "GLS",
    expire_in_secs: 15,
    expire_in_secs_proposal: 24 * 60 * 60,
    networks: {
        Steem: {
            core_asset: "GOLOS",
            address_prefix: "GLS",
            chain_id: "782a3039b478c839e4cb0c941ff4eaeb7df40bdd68bd441afd444b9da763de12"
        }
    },
    /** Set a few properties for known chain IDs. */
    setChainId: function(chain_id) {

        var i, len, network, network_name, ref;
        ref = Object.keys(_this.networks);

        for (i = 0, len = ref.length; i < len; i++) {

            network_name = ref[i];
            network = _this.networks[network_name];

            if (network.chain_id === chain_id) {

                _this.network_name = network_name;

                if (network.address_prefix) {
                    _this.address_prefix = network.address_prefix;
                    ecc_config.address_prefix = network.address_prefix;
                }

                // console.log("INFO    Configured for", network_name, ":", network.core_asset, "\n");

                return {
                    network_name: network_name,
                    network: network
                }
            }
        }

        if (!_this.network_name) {
            console.log("Unknown chain id (this may be a testnet)", chain_id);
        }

    },

    reset: function() {
        _this.core_asset = "GOLOS";
        _this.address_prefix = "GLS";
        ecc_config.address_prefix = "GLS";
        _this.expire_in_secs = 15;
        _this.expire_in_secs_proposal = 24 * 60 * 60;

        console.log("Chain config reset");
    },

    setPrefix: function(prefix = "GLS") {
        _this.address_prefix = prefix;
        ecc_config.address_prefix = prefix;
    }
}
