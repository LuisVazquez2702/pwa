//Guardar en el cache dinamico

function actualizarCacheDinamico(
    dynamicCache, req, res
){
    if(res.ok){
        //utilizar la data - vcalores
        return catches.open(dynamicCache).then(cache => {
            cache.put(req, res.clone());
            return res.clone();
        });

    }else{
        return res;
    }
}