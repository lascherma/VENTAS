			
			var opt_C1822 = new Array ("C1822/EL BODEGÓN DE MONCHO J&L C.A.");
			var opt_C926 = new Array ("C926");
			var opt_3 = new Array ("-", "Google Chrome", "Linux", "opera", "...");
			var opt_4 = new Array ("-", "MSI", "ASUS", "GIGABYTE", "...");
			
			
			function cambia(){
				var cosa;
				cosa = document.formulario1.cosa[document.formulario1.cosa.selectedIndex].value;
				if(cosa!=0){
					
					mis_opts=eval("opt_" + cosa);
					num_opts=mis_opts.length;
					document.formulario1.opt.length = num_opts;
					
					for(i=0; i<num_opts; i++){
						document.formulario1.opt.options[i].value=mis_opts[i];
						document.formulario1.opt.options[i].text=mis_opts[i];
					}
					}else{
						
						document.formulario1.opt.length = 1;
						document.formulario1.opt.options[0].value="-";
						document.formulario1.opt.options[0].text="-";
					}
					document.formulario1.opt.options[0].selected = true;
					
				}