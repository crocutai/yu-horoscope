"use client";

import { useState } from "react";
import { Astrolabes } from "@/assets/astrolabe";
import { Human_Design } from "@/assets/human_design";

export default function HoroscopePage() {
  const [activeTab, setActiveTab] = useState<"星座" | "人類圖">("星座");

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        {/* Header */}
        <header className="mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
            星盤解析
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-base md:text-lg">
            探索你的行星宮位與星座意義
          </p>
        </header>

        {/* Tab Group */}
        <div className="flex gap-1 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-2xl w-fit mb-10 md:mb-12">
          <button
            onClick={() => setActiveTab("星座")}
            className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              activeTab === "星座"
                ? "bg-white dark:bg-zinc-800 text-black dark:text-white shadow-sm"
                : "text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white"
            }`}
          >
            星座
          </button>
          <button
            onClick={() => setActiveTab("人類圖")}
            className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              activeTab === "人類圖"
                ? "bg-white dark:bg-zinc-800 text-black dark:text-white shadow-sm"
                : "text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white"
            }`}
          >
            人類圖
          </button>
        </div>

        {/* Content */}
        <div className={activeTab === "星座" ? "space-y-4" : "space-y-4 hidden"}>
            {/* Table Header - Desktop */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 text-sm font-medium text-zinc-400 uppercase tracking-wider">
              <div className="col-span-2">行星</div>
              <div className="col-span-2">宮位</div>
              <div className="col-span-2">星座</div>
              <div className="col-span-6">描述</div>
            </div>

            {/* Table Rows */}
            <div className="space-y-3">
              {Astrolabes.map((item, index) => (
                <details
                  key={index}
                  className="group bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-700"
                >
                  <summary className="grid md:grid-cols-12 gap-3 md:gap-4 p-4 md:px-6 md:py-5 cursor-pointer list-none items-center">
                    {/* Planet */}
                    <div className="md:col-span-2 flex items-center gap-3">
                      <span className="md:hidden text-xs font-medium text-zinc-400 uppercase">
                        行星
                      </span>
                      <span className="text-base md:text-lg font-semibold">
                        {item.planet}
                      </span>
                    </div>

                    {/* House */}
                    <div className="md:col-span-2 flex items-center gap-3">
                      <span className="md:hidden text-xs font-medium text-zinc-400 uppercase">
                        宮位
                      </span>
                      <span className="px-3 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-full text-sm font-medium whitespace-nowrap">
                        {item.house || "—"}
                      </span>
                    </div>

                    {/* Sign */}
                    <div className="md:col-span-2 flex items-center gap-3">
                      <span className="md:hidden text-xs font-medium text-zinc-400 uppercase">
                        星座
                      </span>
                      <span className="text-zinc-600 dark:text-zinc-300">
                        {item.sign}
                      </span>
                    </div>

                    {/* Expand Indicator */}
                    <div className="md:col-span-6 flex items-center justify-between gap-4">
                      <span className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-1 flex-1">
                        點擊查看詳細解讀
                      </span>
                      <svg
                        className="w-5 h-5 text-zinc-400 transition-transform duration-200 group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </summary>

                  {/* Expanded Content */}
                  <div className="px-4 md:px-6 pb-5 md:pb-6 pt-0">
                    <div className="border-t border-zinc-200 dark:border-zinc-800 pt-4 md:pt-5 space-y-4 md:space-y-6">
                      {/* Sign Description */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                          星座特質 · {item.sign}
                        </h4>
                        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
                          {item.sign_description}
                        </p>
                      </div>

                      {/* House Description */}
                      {item.house && item.house_description && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                            宮位意義 · {item.house}
                          </h4>
                          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
                            {item.house_description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </details>
              ))}
            </div>
        </div>

        {/* Human Design Tab Content */}
        <div className={activeTab === "人類圖" ? "space-y-4" : "space-y-4 hidden"}>
          <div className="space-y-4">
            {/* Human Design Sections */}
            <div className="space-y-3">
              {Human_Design.map((item, index) => (
                <details
                  key={index}
                  className="group bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-700"
                >
                  <summary className="flex items-center justify-between p-4 md:px-6 md:py-5 cursor-pointer list-none">
                    <div className="flex items-center gap-6 w-full">
                      <span className="text-base md:text-lg font-semibold w-40 md:w-48 flex-shrink-0 whitespace-nowrap">
                        {item.name}
                      </span>
                    </div>
                    <svg
                      className="w-5 h-5 text-zinc-400 transition-transform duration-200 group-open:rotate-180 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  {/* Expanded Content */}
                  <div className="px-4 md:px-6 pb-5 md:pb-6 pt-0">
                    <div className="border-t border-zinc-200 dark:border-zinc-800 pt-4 md:pt-5 space-y-6">
                      {/* Center Description */}
                      {item.center_description && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                            中心分析
                          </h4>
                          <p className="text-zinc-700 dark:text-zinc-300 leading-loose whitespace-pre-line">
                            {item.center_description}
                          </p>
                        </div>
                      )}

                      {/* Gate Description */}
                      {item.gate_description && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                            閘門解析
                          </h4>
                          <p className="text-zinc-700 dark:text-zinc-300 leading-loose whitespace-pre-line">
                            {item.gate_description}
                          </p>
                        </div>
                      )}

                      {/* Money Description */}
                      {item.money_description && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                            財賦密碼
                          </h4>
                          <p className="text-zinc-700 dark:text-zinc-300 leading-loose whitespace-pre-line">
                            {item.money_description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
