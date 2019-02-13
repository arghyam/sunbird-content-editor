/**
 * @author Harish kumar Gangula<harishg@ilimi.in>
 */
org.ekstep.pluginframework.publishedRepo = new (org.ekstep.pluginframework.iRepo.extend({
	id: "published",
	discoverManifest: function (pluginId, pluginVer, callback, publishedTime) {
		var instance = this;
		org.ekstep.pluginframework.resourceManager.loadResource(this.resolveResource(pluginId, pluginVer, "manifest.json"), "json", function (err, response) {
			callback(undefined, { "manifest": response, "repo": instance });
		}, publishedTime);
	},
	resolveResource: function (id, ver, resource) {
		if (id === 'org.ekstep.sunbirdcommonheader' ||
			id === 'org.ekstep.developer' ||
			id === 'org.ekstep.config' || id === 'org.ekstep.whatsnew' ||
			id === "org.ekstep.help" ||id === "org.ekstep.metadata") {
			return org.ekstep.pluginframework.config.pluginRepo + "/" + id + "-" + ver + "/" + resource;
		} else {
			return 'https://s3.ap-south-1.amazonaws.com/forwater-plugins' + '/' + id + '-' + ver + '/' + resource
		}
	}
}));
org.ekstep.pluginframework.resourceManager.addRepo(org.ekstep.pluginframework.publishedRepo);
