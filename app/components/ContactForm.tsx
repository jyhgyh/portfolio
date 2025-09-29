"use client";

import { useState } from "react";

const TAGS = ["Предложение о работе", "Вопрос", "Другое"];

export default function StepContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    tags: [] as string[],
  });

  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTagToggle = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  const handleNext = () => {
    if (formData.name && formData.email) setStep(2);
  };

  const handleBack = () => setStep(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Отправка данных:", formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "", tags: [] });
      setStep(1);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="bg-base-light w-full py-12">
      <div className="max-w-lg mx-auto p-8 bg-base-light  rounded-2xl">
        {/* Заголовок */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
            Voulez-vous me contacter?
          </h2>
          <p className="mt-2 text-text-secondary text-sm md:text-text-secondary">
            Faites-nous part de votre idée ou de votre projet et nous verrons ensemble comment je peux vous aider à le réaliser plus rapidement.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <>
              <p className="text-xs text-gray-400 uppercase tracking-wide">Étape <span className="text-text-red">1</span> de 2</p>

              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Comme vous appelle?"
                  required
                  className="w-full text-text-secondary px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue placeholder-gray-400 transition"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full text-text-secondary px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue placeholder-gray-400 transition"
                />
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-full mt-4 py-3 rounded-lg bg-accent-blue text-white font-medium hover:bg-accent-red transition"
              >
                Далее →
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <p className="text-xs text-gray-400 uppercase tracking-wide">Étape <span className="text-text-red">2</span> de 2</p>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Décrivez votre projet ou votre idée..."
                required
                className="w-full text-text-secondary px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue placeholder-gray-400 transition"
              />

              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Sélectionner les tags:</p>
                <div className="flex flex-wrap gap-2">
                  {TAGS.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => handleTagToggle(tag)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition border ${formData.tags.includes(tag)
                          ? "bg-accent-blue text-white border-accent-blue"
                          : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                        }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
                >
                  ← Назад
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-accent-blue text-white font-medium hover:bg-accent-red transition"
                >
                  Отправить
                </button>
              </div>
            </>
          )}
        </form>

        {status === "success" && (
          <p className="mt-6 text-green-600 text-center text-sm">✅ Спасибо! Ваше сообщение успешно отправлено.</p>
        )}
        {status === "error" && (
          <p className="mt-6 text-red-600 text-center text-sm">❌ Произошла ошибка. Попробуйте снова.</p>
        )}
      </div>
    </div>
  );
}
