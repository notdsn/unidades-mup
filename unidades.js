    const units = [
      { nome: "JERUSALÉM", sexo: "M", lider: "EDUARDO", colider: "PEDRO", horario: "19:30 / TERÇA", endereco: "Rua Canudos, 603", bairro: "IRAJÁ", cep: "21230-085", busca: "Rua Canudos, 603, Irajá, Rio de Janeiro, RJ, 21230-085", obs: "", status: "ativa", precisao: "oficial", lat: -22.82186, lng: -43.33420 },
      { nome: "UNIDOS EM CRISTO", sexo: "M", lider: "REINAN", colider: "VALTAIR", horario: "19:30 / TERÇA", endereco: "Rua Roberto Carlos, 4 (planilha: Praça Roberto Carlos)", bairro: "ACARI", cep: "21531-590", busca: "Rua Roberto Carlos, 4, Acari, Rio de Janeiro, RJ, 21531-590", obs: "Nos Correios a via oficial é Rua Roberto Carlos", status: "ativa", precisao: "oficial", lat: -22.82235, lng: -43.34173 },
      { nome: "RAABE", sexo: "F", lider: "LETÍCIA", colider: "LUCIANA", horario: "19:30 / TERÇA", endereco: "Rua Maria Oda — final da rua", bairro: "FIM DO MUNDO", cep: "21230-085", busca: "Rua J, Vila Rica de Irajá, Acari, Rio de Janeiro, RJ", obs: "Fim do Mundo: Rua Trindade = A, Sílvia dos Santos = B", status: "ativa", precisao: "aproximado", lat: -22.82497, lng: -43.33647 },
      { nome: "CALEBE", sexo: "M", lider: "LUCAS", colider: "—", horario: "19:30 / TERÇA", endereco: "Rua G, nº 12", bairro: "FIM DO MUNDO", cep: "21230-085", busca: "Rua G, Vila Rica de Irajá, Acari, Rio de Janeiro, RJ", obs: "Sílvia dos Santos = B; Rua G fica 5 ruas depois da Sílvia", status: "ativa", precisao: "aproximado", lat: -22.82067, lng: -43.33767 },
      { nome: "REBECA", sexo: "F", lider: "AUX. DÉBORA", colider: "NILDA", horario: "19:00 / TERÇA", endereco: "Travessa Leandro", bairro: "ACARI", cep: "21531-430", busca: "Travessa Leandro, Acari, Rio de Janeiro, RJ, 21531-430", obs: "", status: "ativa", precisao: "oficial", lat: -22.82540, lng: -43.34380 },
      { nome: "ESTÁ CONSUMADO", sexo: "F", lider: "AUX. IDAIANE", colider: "AUX. ALINE", horario: "19:30 / TERÇA", endereco: "Rua Geraldo, 31", bairro: "ACARI", cep: "21531-370", busca: "Rua Geraldo, 31, Acari, Rio de Janeiro, RJ, 21531-370", obs: "", status: "ativa", precisao: "oficial", lat: -22.82626, lng: -43.34543 },
      { nome: "VIDA NA VIDA (Carla)", sexo: "F", lider: "CARLA", colider: "—", horario: "20:00 / TERÇA", endereco: "Conj. Tom Jobim, Q24 B14 N3", bairro: "PAVUNA", cep: "21520-815", busca: "Rua Jaime Gomes Caldas, Conjunto Tom Jobim, Pavuna, Rio de Janeiro, RJ, 21520-815", obs: "Via oficial: Rua Jaime Gomes Caldas (Conjunto Tom Jobim)", status: "ativa", precisao: "oficial", lat: -22.81589, lng: -43.36708 },
      { nome: "ESTER", sexo: "F", lider: "ADELINA", colider: "GABRIELA", horario: "18:30 / TERÇA", endereco: "Rua Maria de Lurdes, S/N", bairro: "ACARI", cep: "", busca: "Rua Maria das Graças, Acari, Rio de Janeiro, RJ, 21531-470", obs: "Depois do Mercadinho J.A, 2ª rua à esquerda, portão de madeira", status: "ativa", precisao: "aproximado", lat: -22.82580, lng: -43.34420 },
      { nome: "ANA", sexo: "F", lider: "ELISA", colider: "ANTONIA", horario: "19:30 / TERÇA", endereco: "Travessa Severino, 16", bairro: "ACARI", cep: "21531-650", busca: "Travessa Severino, 16, Acari, Rio de Janeiro, RJ, 21531-650", obs: "", status: "ativa", precisao: "oficial", lat: -22.82490, lng: -43.33910 },
      { nome: "NABOTE", sexo: "M", lider: "DOUGLAS", colider: "AUX. ARILDO", horario: "19:30 / TERÇA", endereco: "Travessa Severino, 16", bairro: "ACARI", cep: "21531-650", busca: "Travessa Severino, 16, Acari, Rio de Janeiro, RJ, 21531-650", obs: "Mesmo endereço da unidade ANA", status: "ativa", precisao: "oficial", lat: -22.82500, lng: -43.33895 },
      { nome: "RUTH", sexo: "F", lider: "DANIELE", colider: "—", horario: "19:30 / TERÇA", endereco: "Travessa Agnaldo, 9", bairro: "ACARI", cep: "21531-180", busca: "Travessa Agnaldo, 9, Acari, Rio de Janeiro, RJ, 21531-180", obs: "DESATIVADO", status: "desativada", precisao: "oficial", lat: -22.82460, lng: -43.34320 },
      { nome: "EKBALLO", sexo: "F", lider: "ANDRÉIA", colider: "LAIS", horario: "19:30 / TERÇA", endereco: "Rua Guaiuba, 482 (planilha: Gualtiba)", bairro: "ACARI", cep: "21531-010", busca: "Rua Guaiuba, 482, Acari, Rio de Janeiro, RJ, 21531-010", obs: "Nome oficial: Rua Guaiuba", status: "ativa", precisao: "oficial", lat: -22.82325, lng: -43.34539 },
      { nome: "JESUS É DEUS", sexo: "M", lider: "OBR. HENRIQUE", colider: "MAX LEANDRO", horario: "19:00 / TERÇA", endereco: "Travessa Dona Irene, 3", bairro: "ACARI", cep: "21531-290", busca: "Travessa Dona Irene, 3, Acari, Rio de Janeiro, RJ, 21531-290", obs: "", status: "ativa", precisao: "oficial", lat: -22.82490, lng: -43.34410 },
      { nome: "FORJADOS NA FÉ", sexo: "M", lider: "AUX. ALEX", colider: "NATAN", horario: "20:00 / TERÇA", endereco: "Rua Geraldo, 31", bairro: "ACARI", cep: "21531-370", busca: "Rua Geraldo, 31, Acari, Rio de Janeiro, RJ, 21531-370", obs: "Mesmo endereço de ESTÁ CONSUMADO", status: "ativa", precisao: "oficial", lat: -22.82640, lng: -43.34528 },
      { nome: "DÉBORA", sexo: "F", lider: "MÁRCIA", colider: "—", horario: "19:30 / TERÇA", endereco: "Rua da Lama", bairro: "ACARI", cep: "", busca: "Rua da Lama, Acari, Rio de Janeiro, RJ", obs: "No murão, última casa na escada", status: "ativa", precisao: "aproximado", lat: -22.82420, lng: -43.34620 },
      { nome: "BETEL", sexo: "M", lider: "OBR. EDUARDO", colider: "CHARLES", horario: "19:30 / TERÇA", endereco: "Rua Maria Oda — final da rua", bairro: "FIM DO MUNDO", cep: "21230-085", busca: "Rua J, Vila Rica de Irajá, Acari, Rio de Janeiro, RJ", obs: "Mesma referência da RAABE — Sílvia dos Santos = B", status: "ativa", precisao: "aproximado", lat: -22.82480, lng: -43.33670 },
      { nome: "IDE", sexo: "F", lider: "CINTIA", colider: "AMANDA", horario: "19:30 / TERÇA", endereco: "Rua Joaquim Loureiro, 110, ap 103", bairro: "IAPC", cep: "21230-105", busca: "Rua Joaquim Loureiro, 110, Irajá, Rio de Janeiro, RJ, 21230-105", obs: "IAPC / Campo dos Milionários — Irajá", status: "ativa", precisao: "oficial", lat: -22.82320, lng: -43.33188 },
      { nome: "ZOE", sexo: "F", lider: "EMANUELE", colider: "ISABELLA", horario: "19:00 / TERÇA", endereco: "Rua H, nº 12", bairro: "FIM DO MUNDO", cep: "21230-085", busca: "Rua H, Vila Rica de Irajá, Acari, Rio de Janeiro, RJ", obs: "Sílvia dos Santos = B; Rua H fica 6 ruas depois da Sílvia", status: "ativa", precisao: "aproximado", lat: -22.82049, lng: -43.33740 },
      { nome: "RESGATE", sexo: "M", lider: "MARCOS", colider: "JOÃO VICTOR", horario: "19:30 / TERÇA", endereco: "Rua Ipuera, 436, ap 102", bairro: "ACARI", cep: "21530-330", busca: "Rua Ipuera, 436, Acari, Rio de Janeiro, RJ, 21530-330", obs: "", status: "ativa", precisao: "oficial", lat: -22.82275, lng: -43.34629 },
      { nome: "GADITAS", sexo: "M", lider: "BRUNO", colider: "RENAN", horario: "19:30 / TERÇA", endereco: "Rua Olaria, 6", bairro: "ACARI", cep: "21531-090", busca: "Rua Olaria, 6, Acari, Rio de Janeiro, RJ, 21531-090", obs: "", status: "ativa", precisao: "oficial", lat: -22.82649, lng: -43.34226 },
      { nome: "CONECTADOS", sexo: "M", lider: "JANDERSON", colider: "—", horario: "20:00 / TERÇA", endereco: "Beco Damião, 11", bairro: "ACARI", cep: "21531-611", busca: "Beco Damião, 11, Acari, Rio de Janeiro, RJ, 21531-611", obs: "", status: "ativa", precisao: "oficial", lat: -22.82440, lng: -43.33940 },
      { nome: "VIDA NA VIDA (Terra)", sexo: "M", lider: "TERRA", colider: "—", horario: "20:00 / TERÇA", endereco: "Conj. Tom Jobim, Q24 B14 N3", bairro: "PAVUNA", cep: "21520-815", busca: "Rua Jaime Gomes Caldas, Conjunto Tom Jobim, Pavuna, Rio de Janeiro, RJ, 21520-815", obs: "Mesmo conjunto da outra Vida na Vida", status: "ativa", precisao: "oficial", lat: -22.81600, lng: -43.36690 },
      { nome: "NOEMI", sexo: "F", lider: "GLEICE", colider: "—", horario: "20:00 / SEXTA", endereco: "Alameda do Sol Nascente, 75, bl 03 apt 201", bairro: "ITACURUÇA", cep: "23870-000", busca: "Alameda do Sol Nascente, 75, Itacuruçá, Mangaratiba, RJ, 23870-000", obs: "Cond. Brisa do Mar — 3º distrito de Itacuruçá, Mangaratiba", status: "ativa", precisao: "oficial", lat: -22.92780, lng: -43.90830 },
      { nome: "JOSUÉ", sexo: "M", lider: "EDSON", colider: "—", horario: "19:30 / TERÇA", endereco: "Rua Nova, 14", bairro: "ACARI", cep: "21531-710", busca: "Studio Raquel Borges, Rua Nova, Acari, Rio de Janeiro, RJ", obs: "Ao lado do Studio Raquel Borges e da Hércules Rações, rua paralela à Rua Pereira da Silva", status: "ativa", precisao: "aproximado", lat: -22.82485, lng: -43.34015 }
    ];

    function ponto(u) {
      return u.lat + "," + u.lng;
    }
    function gmaps(u) {
      return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ponto(u));
    }
    function amaps(u) {
      return "https://maps.apple.com/?ll=" + ponto(u) + "&q=" + encodeURIComponent(u.nome) + "&z=17";
    }
    function waze(u) {
      return "https://waze.com/ul?ll=" + ponto(u) + "&navigate=yes";
    }

    let bairro = "";
    let sexoFiltro = "";
    function match(u) {
      const q = (document.getElementById("q").value || "").toLowerCase().trim();
      if (bairro && u.bairro !== bairro) return false;
      if (sexoFiltro && u.sexo !== sexoFiltro) return false;
      if (!q) return true;
      return [u.nome, u.lider, u.colider, u.endereco, u.bairro, u.obs].join(" ").toLowerCase().includes(q);
    }

    function renderCards() {
      const shown = units.filter(match);
      document.getElementById("count").textContent = shown.length + " unidade(s)";
      document.getElementById("cards").innerHTML = shown.map((u) => `
        <article class="item ${u.status === "desativada" ? "off" : ""}">
          <h3>${u.nome}</h3>
          <span class="tag">${u.bairro}</span>
          <span class="tag ${u.sexo === "F" ? "fem" : "masc"}">${u.sexo === "F" ? "feminino" : "masculino"}</span>
          <span class="tag">${u.precisao === "oficial" ? "rua oficial" : "aproximado"}</span>
          <div class="meta">
            ${u.horario}<br>
            ${u.endereco}${u.cep ? " · CEP " + u.cep : ""}<br>
            Líder: ${u.lider}${u.colider !== "—" ? " · Co-líder: " + u.colider : ""}
            ${u.obs ? "<br>Obs: " + u.obs : ""}
          </div>
          <div class="actions">
            <a class="btn g" href="${amaps(u)}">Mapas</a>
            <a class="btn" href="${gmaps(u)}">Google</a>
            <a class="btn w" href="${waze(u)}">Waze</a>
          </div>
        </article>
      `).join("");
    }

    document.getElementById("q").addEventListener("input", renderCards);
    document.getElementById("filters").addEventListener("click", function (e) {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      document.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("active"); });
      chip.classList.add("active");
      bairro = chip.getAttribute("data-b") || "";
      sexoFiltro = chip.getAttribute("data-s") || "";
      renderCards();
    });
    renderCards();

    function startMap() {
      if (typeof L === "undefined") return;
      var map = L.map("map", { tap: true }).setView([-22.8235, -43.3405], 15);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "© OpenStreetMap" }).addTo(map);
      units.forEach(function (u) {
        if (u.bairro === "ITACURUÇA") return;
        L.circleMarker([u.lat, u.lng], {
          radius: 9,
          color: "#fff",
          weight: 2,
          fillColor: u.sexo === "F" ? "#fb7185" : "#38bdf8",
          fillOpacity: 1
        }).addTo(map).bindPopup("<b>" + u.nome + "</b><br>" + u.endereco + "<br><a href='" + gmaps(u) + "'>Google Maps</a>");
      });
      setTimeout(function () { map.invalidateSize(); }, 400);
    }
    if (document.readyState === "complete") startMap();
    else window.addEventListener("load", startMap);
