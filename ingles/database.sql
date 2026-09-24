-- ============================================================
-- Business Trip: Vitória em Berlim — Esquema de Banco de Dados
-- ============================================================
-- Hoje o jogo (script.js) salva o progresso no localStorage do
-- navegador, na chave "businessTripVitoria_progress", em JSON.
-- Este arquivo é o esquema equivalente em SQL, para o dia em que
-- você quiser migrar para um backend real (Node, PHP, Supabase,
-- Firebase, etc.) e guardar o progresso na nuvem.

CREATE TABLE players (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    name            TEXT NOT NULL DEFAULT 'Vitória Caroline',
    xp              INTEGER NOT NULL DEFAULT 0,
    level           INTEGER NOT NULL DEFAULT 1,
    coins           INTEGER NOT NULL DEFAULT 0,
    hearts          INTEGER NOT NULL DEFAULT 5,
    combo           INTEGER NOT NULL DEFAULT 0,
    best_combo      INTEGER NOT NULL DEFAULT 0,
    answered        INTEGER NOT NULL DEFAULT 0,
    correct         INTEGER NOT NULL DEFAULT 0,
    created_at      DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at      DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Progresso por fase (aeroporto, check-in, quarto, restaurante, problemas, boss)
CREATE TABLE phase_progress (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    player_id       INTEGER NOT NULL REFERENCES players(id),
    phase_id        TEXT NOT NULL,          -- ex: 'airport', 'checkin'...
    completed       BOOLEAN NOT NULL DEFAULT 0,
    completed_at    DATETIME,
    UNIQUE(player_id, phase_id)
);

-- Banco de erros para a Revisão Inteligente (spaced repetition simples)
CREATE TABLE wrong_answers (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    player_id       INTEGER NOT NULL REFERENCES players(id),
    question_key    TEXT NOT NULL,          -- fase + pergunta (chave única da questão)
    pending_reviews INTEGER NOT NULL DEFAULT 2,  -- quantas vezes ainda precisa acertar
    last_seen_at    DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Conquistas desbloqueadas
CREATE TABLE achievements (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    player_id       INTEGER NOT NULL REFERENCES players(id),
    achievement_id  TEXT NOT NULL,          -- ex: 'first', 'combo5', 'lvl5'...
    unlocked_at     DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(player_id, achievement_id)
);

-- Histórico de sessões de estudo (opcional, útil para relatórios de progresso)
CREATE TABLE study_sessions (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    player_id       INTEGER NOT NULL REFERENCES players(id),
    mode            TEXT NOT NULL,          -- 'phase' | 'review' | 'exam'
    phase_id        TEXT,
    correct_count   INTEGER NOT NULL DEFAULT 0,
    total_count     INTEGER NOT NULL DEFAULT 0,
    started_at      DATETIME DEFAULT CURRENT_TIMESTAMP,
    finished_at     DATETIME
);
