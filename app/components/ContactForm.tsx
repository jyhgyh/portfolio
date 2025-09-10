// app/components/StepContactForm.tsx
"use client";

import { useState } from "react";

const TAGS = ["Ошибка", "Предложение", "Вопрос", "Другое"];

export default function StepContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    tags: [] as string[],
  });

  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

  const handleBack = () => {
    setStep(1);
  };

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
    <div className="bg-white w-full pb-1">
    <div className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-2xl border border-gray-100">
      {/* Заголовок + описание */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Связаться со мной</h2>
        <p className="mt-3 text-gray-600 text-lg">
          Есть идея, которой хотите поделиться?  
          Давайте обсудим как я могу вам помочь воплотить ее быстрее.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <>
            <p className="text-sm text-gray-500 font-medium">Шаг 1 из 2</p>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Имя</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                placeholder="Ваше имя"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                placeholder="you@example.com"
              />
            </div>
            <button
              type="button"
              onClick={handleNext}
              className="w-full bg-blue-500 text-white font-semibold py-3 rounded-xl hover:bg-blue-600 transition"
            >
              Далее →
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <p className="text-sm text-gray-500 font-medium">Шаг 2 из 2</p>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Сообщение</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                placeholder="Опишите ваш проект или идею..."
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Выберите теги:</p>
              <div className="flex flex-wrap gap-2">
                {TAGS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => handleTagToggle(tag)}
                    className={`px-3 py-1.5 rounded-full border text-sm transition ${
                      formData.tags.includes(tag)
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 rounded-xl border bg-gray-100 hover:bg-gray-200 transition"
              >
                ← Назад
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
              >
                Отправить
              </button>
            </div>
          </>
        )}
      </form>

      {/* Статус */}
      {status === "success" && (
        <p className="mt-6 text-green-600 text-center text-sm">
          ✅ Спасибо! Ваше сообщение успешно отправлено.
        </p>
      )}
      {status === "error" && (
        <p className="mt-6 text-red-600 text-center text-sm">
          ❌ Произошла ошибка. Попробуйте снова.
        </p>
      )}
    </div>
    </div>
  );
}
