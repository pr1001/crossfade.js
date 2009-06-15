var crossfade = {
	from: null,
	to: null,
	fromOpacity: {from: 1.0, to: 0.0},
	toOpacity: {from: 0.0, to: 1.0},
	fromDuration: 0.5,
	toDuration: 0.5,
	change: function(from, to)
	{
		/* optional method arguments */
		if (typeof(from) != "undefined") { this.from = from; }
		if (typeof(to) != "undefined") { this.to = to; }
			
		/* throw error if function has been called without from and to */
		if (this.from == null || this.to == null)
		{
			throw "Must have both to and from";
		}

		/* make sure we're dealing with DOM Elements */
		try
		{		
			if (typeof(this.from) != "object" || typeof(this.to) != "object")
			{
				this.from = $(String(this.from));
				this.to = $(String(this.to));
			}
		}
		catch (e)
		{
			throw "Prototype is not loaded";
		}
						
		/* make sure to is hidden and has the same location as from */
		this.to.hide();
		this.from.absolutize();
		this.to.absolutize();
		this.to.clonePosition(this.from);
		
		/* attempt to cross fade Elements */
		try
		{
			/* fade out from */
			this.from.fade({duration: this.fromDuration, from: this.fromOpacity.from, to: this.fromOpacity.to});
			
			/* fade in to */
			this.to.appear({duration: this.toDuration, from: this.toOpacity.from, to: this.toOpacity.to});
			
			/* */
			var fromId = this.from.id;
			var toId = this.to.id;
			
			this.from.id = fromId + "temp";
			this.to.id = fromId;
			this.from.id = toId;

			/* remove from node */
/* 			this.to.parentNode.removeChild(this.from); */
			/* change to node's id to that of from node */
/* 			this.to.id = fromId; */
			/* add new to node */
/* 			var newTo = new Element('div'); */
			/* make sure it's hidden */
/* 			newTo.hide(); */
/* 			this.to.parentNode.appendChild(newTo); */
		}
		catch (e)
		{
			throw "Scriptaculous is not loaded";
		}
	}
};