var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT COUNT(usuario.fktime) as voto, time.nome AS times 
        FRom  usuario JOIN time ON  time.idtime = usuario.fktime group by usuario.fktime;`;
        
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT COUNT(usuario.fktime) as voto, time.nome AS times 
        FRom  usuario JOIN time ON  time.idtime = usuario.fktime group by usuario.fktime;`;
    
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =   `SELECT COUNT(questionario.fkmapa) as voto, mapa.Nomemapa as mapa  
        FRom  questionario JOIN mapa ON  mapa.idmapa = questionario.fkmapa group by questionario.fkmapa;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT COUNT(questionario.fkmapa) as voto, mapa.Nomemapa as mapa  
        FRom  questionario JOIN mapa ON  mapa.idmapa = questionario.fkmapa group by questionario.fkmapa;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function estatisticaJogador() {

    var instrucaoSql = '';

    instrucaoSql = `select rating2, KillsPerRound, Headshots, DeathsPerRound from jogador;`;

    // if (process.env.AMBIENTE_PROCESSO == "producao") {
    //     instrucaoSql =   `Select rating2, KillsPerRound, Headshots, DeathsPerRound from jogador;`;

    // } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    // } else {
    //     console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
    //     return
    // }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function graficosDois() {

    var instrucaoSql = '';

    instrucaoSql = `
    SELECT COUNT(usuario.fknivel)  as voto, nivel.nivel  
    FRom  usuario JOIN nivel ON  nivel.idnivel = usuario.fknivel group by usuario.fknivel;`;



    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    estatisticaJogador,
    graficosDois
}
