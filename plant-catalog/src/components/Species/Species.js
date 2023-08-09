const species = [
    {
    id: 1,
    Nomecientifíco : "Caesalpinia echinata",
    Nomecomum: "Pau-Brasil",
    imagemcapa:'https://www.ibflorestas.org.br/wp-content/uploads/2010/07/pau-brasil-caesalpinia-echinata-225x300.jpg',
    imagemfruto:'https://1.bp.blogspot.com/-MXjjTnE2DUE/XWqWGP8xQzI/AAAAAAAA7mo/_8QBAIxdr2AU_u2AloD8nUWui03Kz9xNACLcBGAs/s1600/Pau_Brasil-Caesalpinia_%2Bechinata%2B%25283%2529.jpg',
    imagemarvore:'https://flora10.com.br/wp-content/uploads/2013/11/Pau-Brasil.jpg',
    Ocorrência: "PE",
    Porte: "Grande",
    Frutificação: "Outubro a janeiro", 
    Floração: "Dezembro a maio",
    Disperção: "Autocórica",
    Estado: "EN - em perigo"
},
{
    id: 2,
    Nomecientifíco : "Garcinia gardneriana",
    Nomecomum: "Bacupari",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Médio",
    Frutificação: "Novembro", 
    Floração: "Fevereiro",
    Disperção: "Zoocoria (por mamiferos) e Ictiocórica",
    Estado: "NE - Não ameaçada"
},
{
    id: 3,
    Nomecientifíco : "Posoqueria latifolia",
    Nomecomum: "Baga-de-Macaco",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Médio",
    Frutificação: "Janeiro a abril", 
    Floração: "Outubro a janeiro",
    Disperção: "Pequenos macacos e quatis",
    Estado: "LC - Categoria de ameaça: pouco preocupante"
},
{
    id: 4,
    Nomecientifíco : "Rapanea guianensis",
    Nomecomum: "Capororoca-do-Cerrado",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Grande",
    Frutificação: "Janeiro a abril", 
    Floração: "Dezembro a janeiro",
    Disperção: "Zoocoria",
    Estado: "NE - Não ameaçada"
},
{
    id: 5,
    Nomecientifíco : "Inga edulis",
    Nomecomum: "Ingá-Cipó",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Grande",
    Frutificação: "Dezembro a março", 
    Floração: "Outubro a dezembro",
    Disperção: "Zoocoria e Hidrocoria",
    Estado: "-"
},
{
    id: 6,
    Nomecientifíco : "Licania tomentosa",
    Nomecomum: "Oiti-da-Praia",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Grande",
    Frutificação: "Fevereiro a abril", 
    Floração: "Outubro",
    Disperção: "Autocórica e Zoocórica",
    Estado: "DD - Deficiência de dados"
},
{
    id: 7,
    Nomecientifíco : "Handroanthus serratifolius",
    Nomecomum: "Pau-d’Arco-Amarelo",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Grande",
    Frutificação: "Setembro a outubro", 
    Floração: "Maio",
    Disperção: "Anemocórica",
    Estado: "NT - Quase ameaçada"
},
{
    id: 8,
    Nomecientifíco : "Piptadenia viridiflora",
    Nomecomum: "Surucucu",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Grande",
    Frutificação: "Outubro a janeiro", 
    Floração: "Julho a outubro",
    Disperção: "Autocoria",
    Estado: "NE - Não ameaçada"
},
{
    id: 9,
    Nomecientifíco : "Vitex polygama",
    Nomecomum: "Tarumã-Açu",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Médio",
    Frutificação: "Janeiro a abril", 
    Floração: "Setembro",
    Disperção: "Zoocórica",
    Estado: "-"
},
{
    id: 10,
    Nomecientifíco : "Virola gardneri",
    Nomecomum: "Urucuba",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Grande",
    Frutificação: "Julho a outubro", 
    Floração: "Novembro a janeiro",
    Disperção: "Aves",
    Estado: "NE - Não ameaçada"
},
{
    id: 11,
    Nomecientifíco : "Luehea paniculata",
    Nomecomum: "Açoita-Cavalo",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Médio",
    Frutificação: "Durante todo ano", 
    Floração: "Durante todo ano",
    Disperção: "Anemocórica",
    Estado: "NE - Não ameaçada"
},
{
    id: 12,
    Nomecientifíco : "Andira fraxinifolia",
    Nomecomum: "Angelim-Doce",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Grande",
    Frutificação: "Janeiro a março", 
    Floração: "Junho a agosto",
    Disperção: "Zoocórica",
    Estado: "DD - Deficiência de dados"
},
{
    id: 13,
    Nomecientifíco : "Cordia superba",
    Nomecomum: "Babosa-Branca",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Médio",
    Frutificação: "Novembro a dezembro", 
    Floração: "Outubro a março",
    Disperção: "Zoocórica",
    Estado: "DD - Deficiência de dados"
},
{
    id: 14,
    Nomecientifíco : "Symphonia globulifera",
    Nomecomum: "Bulandi",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Grande",
    Frutificação: "Março a maio", 
    Floração: "Setembro a novembro",
    Disperção: "Autocórica e Zoocórica",
    Estado: "DD - Deficiência de dados"
},
{
    id: 15,
    Nomecientifíco : "Tabebuia aurea",
    Nomecomum: "Caraúba",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Grande",
    Frutificação: "Janeiro a fevereiro", 
    Floração: "Setembro a novembro",
    Disperção: "Anemocórica",
    Estado: "DD - Deficiência de dados"
},
{
    id: 16,
    Nomecientifíco : "Senna spectabilis var. excelsa",
    Nomecomum: "Cássia-do-Nordeste",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Grande",
    Frutificação: "Agosto a setembro", 
    Floração: "Novembro a abril",
    Disperção: "Autocórica e Zoocórica",
    Estado: "DD - Deficiência de dados"
},
{
    id: 17,
    Nomecientifíco : "Pityrocarpa moniliformis",
    Nomecomum: "Catanduva",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Médio",
    Frutificação: "Setembro", 
    Floração: "Março a junho",
    Disperção: "Autocórica",
    Estado: "DD - Deficiência de dados"
},
{
    id: 18,
    Nomecientifíco : "Cedrela odorata",
    Nomecomum: "Cedro-Vermelho",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Grande",
    Frutificação: "Fevereiro a junho", 
    Floração: "Dezembro a fevereiro",
    Disperção: "Anemocórica",
    Estado: "VU - Vulnerável"
},
{
    id: 19,
    Nomecientifíco : "Eschweilera ovata",
    Nomecomum: "Embiriba",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Grande",
    Frutificação: "Dezembro a abril", 
    Floração: "Novembro a maio",
    Disperção: "Indefinida",
    Estado: "NE - Não ameaçada"
},
{
    id: 20,
    Nomecientifíco : "Alseis floribunda",
    Nomecomum: "Falsa-Pelada",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Grande",
    Frutificação: "Julho a outubro", 
    Floração: "Julho a agosto",
    Disperção: "Autocórica e Zoocórica",
    Estado: "-"
},
{
    id: 21,
    Nomecientifíco : "Caesalpinia ferrea var. ferrea",
    Nomecomum: "Jucá",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Pequeno",
    Frutificação: "Agosto", 
    Floração: "Junho a setembro",
    Disperção: "Autocórica",
    Estado: "NE - Não ameaçada"
},
{
    id: 22,
    Nomecientifíco : "Mimosa tenuiflora",
    Nomecomum: "Jurema-Preta",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Pequeno",
    Frutificação: "Dezembro a março", 
    Floração: "Julho a fevereiro",
    Disperção: "Autocórica",
    Estado: "NE - Não ameaçada"
},
{
    id: 23,
    Nomecientifíco : "Protium heptaphyllum",
    Nomecomum: "Almecegueira ",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Grande",
    Frutificação: "Fevereiro a Abril", 
    Floração: "Setembro a novembro ",
    Disperção: "Zoocórica",
    Estado: "NE- Não ameaçada"
},
{
    id: 24,
    Nomecientifíco : "Samanea tubulosa",
    Nomecomum: "Bordão-de-velho",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Grande",
    Frutificação: "Após estação chuvosa", 
    Floração: "Dezembro a março",
    Disperção: "Autocórica e zoocórica",
    Estado: "NE- Não ameaçada"
},
{
    id: 25,
    Nomecientifíco : "Lithrea molleoides",
    Nomecomum: "Bugreiro",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Médio",
    Frutificação: "Dezembro", 
    Floração: "Agosto a outubro",
    Disperção: "Zoocórica",
    Estado: "NE- Não ameaçada"
},
{
    id: 26,
    Nomecientifíco : "Cecropia pachystachya",
    Nomecomum: "Embaúba",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Grande",
    Frutificação: "Maio a junho", 
    Floração: "Dezembro a fevereiro",
    Disperção: "Zoocórica",
    Estado: "NE- Não ameaçada"
},
{
    id: 27,
    Nomecientifíco : "Albizia polycephala",
    Nomecomum: "Farinha-seca",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Grande",
    Frutificação: "Maio a junho", 
    Floração: "Outubro",
    Disperção: "Autocórica",
    Estado: "LC- Pouco preocupante"
},
{
    id: 28,
    Nomecientifíco : "Guazuma ulmifolia",
    Nomecomum: "Mutamba",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Grande",
    Frutificação: "Outubro a novembro", 
    Floração: "Novembro a abril",
    Disperção: "Zoocórica",
    Estado: "NE- Não ameaçada"
},
{
    id: 29,
    Nomecientifíco : "Parkia pendula",
    Nomecomum: "Visgueiro",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Grande",
    Frutificação: "Novembro a março", 
    Floração: "Julho a setembro",
    Disperção: "Autocórica/ Barocórica",
    Estado: "NE- Não ameaçada"
},
{
    id: 30,
    Nomecientifíco : "Sorocea bonplandii",
    Nomecomum: "Cincho",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Médio",
    Frutificação: "Outubro a dezembro", 
    Floração: "Maio a agosto",
    Disperção: "Sabiás/Araçaris",
    Estado: "NE- Não ameaçada"
},
{
    id: 31,
    Nomecientifíco : "Simarouba amara",
    Nomecomum: "Marupá",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Grande",
    Frutificação: "Fevereiro a março", 
    Floração: "Outubro a dezembro",
    Disperção: "Autocórica/Zoocórica",
    Estado: "NE- Não ameaçada"
},
{
    id: 32,
    Nomecientifíco : "Byrsonima sericea",
    Nomecomum: "Murici",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Grande",
    Frutificação: "Março a abril", 
    Floração: "Setembro a abril",
    Disperção: "Zoocórica",
    Estado: "NE- Não ameaçada"
},
{
    id: 33,
    Nomecientifíco : "Pterocarpus rohrii",
    Nomecomum: "Sangueiro",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Grande",
    Frutificação: "Novembro", 
    Floração: "Dezembro a março",
    Disperção: "Anemocórica",
    Estado: "NE- Não ameaçada"
},
{
    id: 34,
    Nomecientifíco : "Plathymenia reticulata",
    Nomecomum: "Vinhático",
    imagemcapa:'',
    imagemfruto:'',
    imagemarvore:'',
    Ocorrência: "PE",
    Porte: "Grande",
    Frutificação: "Outubro a janeiro", 
    Floração: "Setembro a fevereiro",
    Disperção: "Anemocórica",
    Estado: "LC- Pouco preocupante"
}
]

export default species;