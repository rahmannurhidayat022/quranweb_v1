function main () {
    const getQuran = () => {
        fetch("https://api.quran.sutanlab.id/surah")
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            renderAllSurah(responseJson.data);
        }) .catch(error => {
            showResponseMessage(error)
        })
    }
    
    // system list
    const renderAllSurah = (data) => {
        const listElement = document.querySelector(".listQuran");
        listElement.innerHTML = "";

        data.forEach(ayat => {
            listElement.innerHTML += `
            <div class="container">
                <div class="col-lg-4 col-md-6 col-sm-12 float-left" style="margin-top: 12px;">
                    <div class="card">
                        <div class="card-body" id="${ayat.number}">
                            <div style="float: left;">
                                <h5>${ayat.number}.  ${ayat.englishName} (${ayat.numberOfAyahs})</h5>
                                <p>${ayat.idNameTranslation}</p>
                            </div>
                            <div style="float: right;">
                                <h5 style="font-family: 'Amiri',sarif;">${ayat.name}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        });
    };
    getQuran();
}

export default main;